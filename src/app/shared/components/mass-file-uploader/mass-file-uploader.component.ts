import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpHeaders, HttpParams} from '@angular/common/http';
import {FileUploader} from './file-uploader';

@Component({
    selector: 'app-mass-file-uploader',
    templateUrl: './mass-file-uploader.component.html',
    styleUrls: ['./mass-file-uploader.component.scss']
})
export class MassFileUploaderComponent implements OnInit, FileUploader {

    @Input()
    allowedExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];

    @Input()
    removeUploadFromQueueOnSuccess = false;

    @Input()
    maxFiles = 0;

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

    @Output()
    fileUploaded = new EventEmitter();

    /*    @Input()
        uploadImmediately = true;

        @Input()
        showProgressBars = true;*/


    files: File[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    onFilesSelected(files: FileList) {
        if (files) {
            for (let i = 0; i < files.length; i++) {
                if (this.maxFiles <= 0 || this.files.length < this.maxFiles) {
                    this.addFileToQueue(files[i]);
                }
            }
        }
    }


    onFileUploadSuccess(fileIndex, response) {
        console.log('fileIndex: ', fileIndex);
        console.log('response: ', response);
        if (this.removeUploadFromQueueOnSuccess) {
            this.removeFileFromQueue(fileIndex);
        }
        this.fileUploaded.emit(response);
    }

    onFileUploadCancelled(fileIndex) {
        this.removeFileFromQueue(fileIndex);
    }

    private addFileToQueue(file: File) {
        this.files.push(file);
    }

    private removeFileFromQueue(fileIndex) {
        this.files.splice(fileIndex, 1);
    }
}
