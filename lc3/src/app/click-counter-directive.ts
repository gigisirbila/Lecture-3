import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appClickCounterDirective]',
})
export class ClickCounterDirective {
  private count = 0;

  @Output() clickData = new EventEmitter<{ event: MouseEvent; count: number }>();

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    this.count++;

    this.clickData.emit({
      event: event,
      count: this.count,
    });
  }
}
