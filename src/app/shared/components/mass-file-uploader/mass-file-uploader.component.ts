import {Component, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatFileUpload, MatFileUploadQueue} from 'angular-material-fileupload';
import {first} from 'rxjs/operators';

@Component({
    selector: 'app-mass-file-uploader',
    templateUrl: './mass-file-uploader.component.html',
    styleUrls: ['./mass-file-uploader.component.scss']
})
export class MassFileUploaderComponent implements OnInit {

    @Input()
    dragAndDropEnabled = true;

    @Input()
    browseButtonVisible = true;

    @Input()
    imagesOnly = true;

/*    @Input()
    uploadImmediately = true;

    @Input()
    showProgressBars = true;*/

    @Input()
    maxFiles = 0;


    @ViewChild(MatFileUploadQueue)
    private fileUploadQueue: MatFileUploadQueue;

    allowedImageExtensions = ['.png', '.jpg', '.jpeg', '.bmp'];

    dropzoneActive = false;

    constructor() {
    }

    ngOnInit() {
        if (!this.dragAndDropEnabled && !this.browseButtonVisible) {
            this.dragAndDropEnabled = true;
            this.browseButtonVisible = true;
        }

        this.setupListeners();
    }

    onFilesSelected(files: FileList) {
        if (files) {
            for (let i = 0; i < files.length; i++) {
                if (this.maxFiles === 0 || this.fileUploadQueue.files.length < this.maxFiles) {
                    this.fileUploadQueue.add(files[i]);
                }
            }
        }
    }


    private setupListeners() {
        if (this.fileUploadQueue) {
/*            console.log(this.fileUploadQueue);
            this.fileUploadQueue.fileUploads.changes.subscribe(
                (matFileUpload: MatFileUpload) => {
                    if (this.uploadImmediately) {
                        matFileUpload.upload();
                    }
                });*/
        }
    }

    onFilesHovered($event) {
        this.dropzoneActive = $event;
    }
}
