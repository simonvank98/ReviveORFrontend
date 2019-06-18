import {AfterViewInit, Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[price-format]'
})
export class PriceFormatDirective implements AfterViewInit {
  private regex: RegExp = new RegExp(/^\d+(?:[.,]\d{0,2})?$/);

  private previousValue: string;

  constructor(private el: ElementRef, private _renderer: Renderer2) {
  }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const currentValue: string = this.el.nativeElement.value;

    if (this.previousValue === undefined) {
      this.previousValue = currentValue;
    }
    this._renderer.setProperty(this.el.nativeElement, 'value', currentValue.replace(/,/g, '.'));

    if (!currentValue.match(this.regex) && currentValue) {
      this._renderer.setProperty(this.el.nativeElement, 'value', this.previousValue);
    }

    this.previousValue = this.el.nativeElement.value;

    if (currentValue !== this.previousValue) {
      // Allow reactive forms to update again
      const customEvent: Event = document.createEvent('Event');
      customEvent.initEvent('input', true, true);
      Object.defineProperty(customEvent, 'target', {value: this.el.nativeElement, enumerable: true});
      this.el.nativeElement.dispatchEvent(customEvent);
    }
  }


    ngAfterViewInit(): void {
      setTimeout(() => {
        this.previousValue = this.el.nativeElement.value;
      }, 100);
    }
}
