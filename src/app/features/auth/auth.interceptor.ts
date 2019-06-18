import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take} from 'rxjs/operators';
import {AuthenticationService} from '../../shared/services/auth/authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private AUTH_HEADER = 'Authorization';
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(public authenticationService: AuthenticationService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = this.addAuthenticationToken(req);
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                // if a 401 happened, there is a change the token has expired
                if (error && error.status === 401) {

                    // Do not generate more than 1 jwt token
                    // if more request are done it wil be put in an queue
                    if (this.refreshTokenInProgress) {
                        return this.refreshTokenSubject.pipe(
                            filter(result => result !== null),
                            take(1),
                            switchMap(() => next.handle(this.addAuthenticationToken(req)))
                        );
                    }

                    // Activate the queuing of other requests
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);

                    // Refresh the token
                    return this.refreshAccessToken().pipe(
                        switchMap((success: boolean) => {
                            this.refreshTokenSubject.next(success);
                            return next.handle(this.addAuthenticationToken(req));
                        }),
                        finalize(() => this.refreshTokenInProgress = false)
                    );
                }
                return throwError(error);
            })
        );
    }

    private refreshAccessToken(): Observable<any> {
        return this.authenticationService.renew();
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        if (!localStorage.getItem('access_token')) {
            return request;
        }
        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + localStorage.getItem('access_token')),
        });
    }
}
