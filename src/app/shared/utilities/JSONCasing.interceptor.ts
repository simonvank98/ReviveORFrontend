import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as humps from 'humps';
import {environment} from '../../../environments/environment';
import {CommonJs} from './common-js';

@Injectable()
export class JSONCasingInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // Interceptor only runs for reviveOR API.
        if (!req.url.match(environment.reviveORAPIUrl)) {
            return next.handle(req);
        }

        // Convert request json from camelCase to snake_case.
        if (req.body && CommonJs.isJSONObject(req.body)) {
            req = req.clone({body: humps.decamelizeKeys(req.body)});
        }
        // Convert response json from snake_case to camelCase
        return next.handle(req).pipe(map((event) => {
            if (event instanceof HttpResponse) {
                if (event.headers.get('content-type').includes('application/json')) {
/*                    console.log('raw body: ', event.body);
                    console.log('camelized keys: ', humps.camelizeKeys(event.body));*/
                    event = event.clone({body: humps.camelizeKeys(event.body)});
                }
            }
            return event;
        }));
    }

}
