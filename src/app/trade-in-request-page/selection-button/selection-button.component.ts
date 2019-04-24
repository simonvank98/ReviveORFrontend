import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements OnInit, AfterViewInit {

    @Input() value: string;
    @Input() text: string;
    @Input() imageUrl: string;
    @Input() match: any;

    @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

    constructor() { }

    ngOnInit() {}

    ngAfterViewInit() {
        const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('.trade-in-process-selection-button');
        for (let i = 0; i < buttons.length; i++) {
            const button = <HTMLElement>buttons[i];
            console.log(button.dataset.selection);
            console.log(this.match);
            if (button.dataset.selection === this.match) {
                button.classList.add('selected');
            }
        }
    }

    onSelectionButtonClicked(event, value) {
        const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('.trade-in-process-selection-button');
        for (let i = 0; i < buttons.length; i++) {
            const button = <HTMLElement>buttons[i];
            button.classList.remove('selected');
        }
        event.srcElement.classList.add('selected');
    }

}
