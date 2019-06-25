import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-stepper',
    templateUrl: './stepper.component.html',
    styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

    @Input() steps = [
        'Jewellery type',
        'Value',
        'Extra details',
        'Trade-in overview'
    ];
    @Input() descriptions = [
        'Determine the type of Ocean Republic jewellery.',
        'Determine the name to estimate trade-in credit.',
        '',
        ''
    ];
    @Input() horizontal = false;
    @Input() currentStep = 0;

    constructor() { }

    ngOnInit() {
    }

}
