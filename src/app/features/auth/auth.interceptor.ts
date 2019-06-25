import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {catchError, filter, finalize, switchMap, take} from 'rxjs/operators';
import {AuthenticationService} from '../../shared/services/auth/authentication.service';
import {environment} from '../../../environments/environment';

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
                if (error && error.status === 401) {
                    if (this.refreshTokenInProgress) {
                        return this.refreshTokenSubject.pipe(
                            filter(result => result !== null),
                            take(1),
                            switchMap(() => next.handle(this.addAuthenticationToken(req)))
                        );
                    }
                    this.refreshTokenInProgress = true;
                    this.refreshTokenSubject.next(null);
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
        // If you are calling an outside domain then do not add the token.
        if (!request.url.match(`${environment.reviveORAPIUrl}`)) {
          return request;
        }
        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + localStorage.getItem('access_token')),
        });
    }
}
