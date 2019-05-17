import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-file-dropzone',
    templateUrl: './file-dropzone.component.html',
    styleUrls: ['./file-dropzone.component.scss']
})
export class FileDropzoneComponent implements OnInit {

    @Input()
    showBrowseButton = true;

    @Input()
    allowedExtensions = [];

    @Output()
    filesDropped = new EventEmitter<FileList>();

    dropzoneActive = false;

    constructor() {
    }

    ngOnInit() {
    }

    onFilesHovered(event) {
        this.dropzoneActive = event;
    }

    onFilesSelected(files: FileList) {
        this.filesDropped.emit(files);
    }
}
