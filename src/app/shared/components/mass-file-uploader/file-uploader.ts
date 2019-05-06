import {HttpHeaders, HttpParams} from '@angular/common/http';

export interface FileUploader {
    httpUrl: string;

    httpRequestHeaders: HttpHeaders | {
        [header: string]: string | string[];
    };

    httpRequestParams: HttpParams | {
        [param: string]: string | string[];
    };

    fileAlias: string;
}
