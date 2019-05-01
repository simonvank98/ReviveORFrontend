import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, Optional, Inject, forwardRef} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Subscription} from 'rxjs';
import {FileUploader} from '../mass-file-uploader/file-uploader';

@Component({
    selector: 'app-file-upload-control-bar',
    templateUrl: './file-upload-control-bar.component.html',
    styleUrls: ['./file-upload-control-bar.component.scss']
})
export class FileUploadControlBarComponent implements OnInit, OnDestroy {

    @Input()
    id: number;

    @Input()
    httpUrl: string;

    @Input()
    httpRequestHeaders: HttpHeaders | {
        [header: string]: string | string[];
    } = new HttpHeaders().set('Content-Type', 'multipart/form-data');

    @Input()
    httpRequestParams: HttpParams | {
        [param: string]: string | string[];
    } = new HttpParams();

    @Input()
    fileAlias = 'file';

    @Input()
    get file(): File {
        return this._file;
    }

    set file(file: File) {
        this._file = file;
        this.totalBytes = file.size;
    }

    @Input()
    fileUploader: FileUploader;

    @Output() uploadSuccess = new EventEmitter();
    @Output() uploadErrors = new EventEmitter<HttpErrorResponse>();
    @Output() uploadCancelled = new EventEmitter();

    isUploading = false;
    hasErrors = false;
    progressPercentage = 0;
    uploadedBytes = 0;
    totalBytes = 0;

    private _file: File;
    private fileUploadSubscription: Subscription;

    constructor(private httpClient: HttpClient) {
    }

    ngOnInit() {
        if (this.fileUploader) {
            this.copySettingsFromFileUploader();
        }

        if (this.file) { // default immediate upload
            this.startUpload();
        }
    }

    public startUpload() {
        this.hasErrors = false;
        this.isUploading = true;
        const formData = new FormData();
        formData.set(this.fileAlias, this._file, this._file.name);

        console.log('URL b4 upload', this.httpUrl);

        // @ts-ignore
        this.fileUploadSubscription = this.httpClient.post(this.httpUrl, formData, this.getRequestOptions()).subscribe(
            (event) => {
                if (event.type === HttpEventType.UploadProgress) {
                    this.updateProgress(event.loaded, event.total);
                } else if (event.type === HttpEventType.Response) {
                    this.uploadSuccess.emit(event.body);
                }
            }, (error: HttpErrorResponse) => {
                this.handleUploadErrors(error);
            }, () => {
                this.isUploading = false;
            });
    }

    public cancelUpload() {
        this.stopUpload();
        this.uploadCancelled.emit(this);
    }

    private handleUploadErrors(error: HttpErrorResponse) {
        this.stopUpload();
        this.uploadErrors.emit(error);
        this.hasErrors = true;
        console.log(error);
    }

    private stopUpload() {
        if (this.fileUploadSubscription) {
            this.fileUploadSubscription.unsubscribe();
        }
        this.isUploading = false;
    }

    private updateProgress(uploadedBytes, totalBytes) {
        this.progressPercentage = Math.floor(uploadedBytes * 100 / totalBytes);
        this.uploadedBytes = uploadedBytes;
        this.totalBytes = totalBytes;
    }

    private getRequestOptions() {
        return {
            // headers: this.httpRequestHeaders,
            params: this.httpRequestParams,
            observe: 'events',
            reportProgress: true,
            responseType: 'json'
        };
    }

    private copySettingsFromFileUploader() {
        this.httpUrl = this.fileUploader.httpUrl || this.httpUrl;
        this.httpRequestHeaders = this.fileUploader.httpRequestHeaders || this.httpRequestHeaders;
        this.httpRequestParams = this.fileUploader.httpRequestParams || this.httpRequestParams;
        this.fileAlias = this.fileUploader.fileAlias || this.fileAlias;
    }

    ngOnDestroy() {
        if (this.fileUploadSubscription) {
            this.fileUploadSubscription.unsubscribe();
        }
    }

}
