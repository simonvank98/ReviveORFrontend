import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-file-selection',
    templateUrl: './file-selection.component.html',
    styleUrls: ['./file-selection.component.scss']
})
export class FileSelectionComponent implements OnInit {
    @Input()
    allowedExtensions = [];

    @Input()
    allowMultipleSelection = true;

    @Input()
    showSelectionInfo = false;

    @Input()
    defaultButtonText = 'Browse Files';

    @Output() filesSelected: EventEmitter<FileList> = new EventEmitter<FileList>();

    buttonText: string;

    constructor() {
    }

    ngOnInit() {
        this.buttonText = this.defaultButtonText;
    }

    onChange(event) {
        const files = event.target.files;
        if (files) {
            this.filesSelected.emit(files);

            if (this.showSelectionInfo) {
                this.updateDisplayText(files);
            }
            event.target.value = '';
        }
    }

    private updateDisplayText(files: FileList) {
        if (files) {
            const amountOfFiles = files.length;
            if (amountOfFiles > 1) {
                this.buttonText = `${amountOfFiles} files selected`;
            } else {
                this.buttonText = files[0].name;
            }
        } else {
            this.buttonText = this.defaultButtonText;
        }
    }
}
