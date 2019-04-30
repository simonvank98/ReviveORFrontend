import {
    Component,
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    Output,
} from '@angular/core';


// noinspection TsLint
@Directive({
    selector: 'input[fileUploadInputForSafe], div[fileUploadInputForSafe]',
})
export class FileUploadInputForSafeDirective {

    private _queue: any = null;
    private _element: HTMLElement;

    @Output() filesDropped = new EventEmitter<FileList>();
    @Output() filesHovered = new EventEmitter();

    constructor(private element: ElementRef) {
        this._element = this.element.nativeElement;
    }

    @Input('fileUploadInputForSafe')
    set fileUploadQueue(value) {
        if (value) {
            this._queue = value;
        }
    }


    @HostListener('change', ['$event'])
    public onChange(event) {
        const files = this.element.nativeElement.files;
        if (files) {
            this.filesDropped.emit(files);
            for (let i = 0; i < files.length; i++) {
                this._queue.add(files[i]);
            }
            this.element.nativeElement.value = '';
        }
    }

    @HostListener('drop', ['$event'])
    public onDrop(event) {
        const files = event.dataTransfer.files;
        if (files) {
            this.filesDropped.emit(files);
            this.filesHovered.emit(false);

            for (let i = 0; i < files.length; i++) {
                this._queue.add(files[i]);
            }

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

    @HostListener('dragleave',  ['$event'])
    public onDragLeave(event) {
        this.filesHovered.emit(false);
    }
}
