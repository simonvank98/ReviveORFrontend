import {Directive, ElementRef, EventEmitter, HostListener, Output,} from '@angular/core';


// noinspection TsLint
@Directive({
    selector: 'input[fileDragAndDrop], div[fileDragAndDrop]',
})
export class FileDragAndDropDirective {

    @Output() filesDropped = new EventEmitter<FileList>();
    @Output() filesHovered = new EventEmitter();

    constructor(private element: ElementRef) {
    }

    @HostListener('drop', ['$event'])
    public onDrop(event) {
        const files = event.dataTransfer.files;
        if (files) {
            this.filesDropped.emit(files);
            this.filesHovered.emit(false);

            event.preventDefault();
            event.stopPropagation();
            this.element.nativeElement.value = '';
        }
    }

    @HostListener('dragover', ['$event'])
    public onDragOver(event) {
        event.preventDefault();
        this.filesHovered.emit(true);
    }

    @HostListener('dragleave', ['$event'])
    public onDragLeave(event) {
        this.filesHovered.emit(false);
    }
}
