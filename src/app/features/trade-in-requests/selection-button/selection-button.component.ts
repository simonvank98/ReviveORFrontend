import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements OnInit {

    // Value of the selection
    @Input() value: any;
    // Text to desplay inside the button
    @Input() text: string;
    // Background image url of the button
    @Input() imageUrl: string;
    // If this matches the value above, this button will be selected by default
    @Input() match: any;
    // Button group for radio button-like functionality
    @Input() group: string;

    @Output() buttonClicked: EventEmitter<any> = new EventEmitter();

    selected = false;
    hasBackground = true;

    constructor() { }

    ngOnInit() {
        this.checkSelectedState();
        if (this.imageUrl === undefined) {
            this.hasBackground = false;
        }
    }

    checkSelectedState() {
        if (this.value.constructor === Object) {
            this.selected = this.value.id === this.match.id ? true : false;
        } else {
            if (this.value === this.match) {
                this.selected = true;
            }
        }
    }

    onSelectionButtonClicked(event, value) {
        const buttons = <NodeListOf<HTMLElement>>document.querySelectorAll('.trade-in-process-selection-button');
        for (let i = 0; i < buttons.length; i++) {
            const button = <HTMLElement>buttons[i];
            if (button.dataset.group === event.target.dataset.group) {
                button.classList.remove('selected');
            }
        }
        event.target.classList.add('selected');
        this.buttonClicked.emit({value: value});
    }

}
