import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class TempApiService {
  constructor(private http: HttpClient) {

  }

  private createQueryString(queryParameters: object): string {
    let queryString = '';

    if (typeof queryParameters === 'object') {
        Object.keys(queryParameters).forEach(function(key) {
            const value = queryParameters[key];
            const prefix = queryString.length === 0 ? '?' : '&';
            queryString += `${prefix}${key}=${value}`;
        });
    }

    return queryString;
  }

  private createURI(path: string, queryParameters: object): string {
    const queryString = this.createQueryString(queryParameters);

    /*return `${environment.reviveORAPIUrl}assets/${path}.json`;*/
      return `${environment.reviveORAPIUrl}${path}`;

  }

  private createRequestHeaders(): HttpHeaders {
    let headers = new HttpHeaders();

    // if (this.authService.hasAuthorization()) {
    //   headers = headers.set('Authorization', this.authService.createAuthorizationString());
    // }

    return headers;
  }

  public get<T>(path: string, queryParameters?: object): Observable<T> {
    const uri = this.createURI(path, queryParameters);
    const headers = this.createRequestHeaders();

    return this.http.get<T>(uri, { headers: headers });
  }

  public post<T>(path: string, data: Object, queryParameters?: Object): Observable<any> {
    const uri = this.createURI(path, queryParameters);
    const headers = this.createRequestHeaders();

    return this.http.post(uri, data, { headers: headers });
  }

  public put<T>(path: string, data: Object, queryParameters?: Object): Observable<any> {
    const uri = this.createURI(path, queryParameters);
    const headers = this.createRequestHeaders();

    return this.http.put(uri, data, { headers: headers });
  }

  public delete<T>(path: string, queryParameters?: Object): Observable<any> {
    const uri = this.createURI(path, queryParameters);
    const headers = this.createRequestHeaders();

    return this.http.delete(uri, { headers: headers });
  }

}
