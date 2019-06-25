import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'yesno'})
export class YesnoPipe implements PipeTransform {
    transform(value) {
        return value ? 'Yes' : 'No';
    }
}
