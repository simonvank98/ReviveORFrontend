import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent implements OnInit {

    @Input() value: string;
    @Input() text: string;
    @Input() imageUrl: string;

    constructor() { }

    ngOnInit() {
    }

}
