import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDoubleClickDirective]',
})
export class DoubleClickDirective {
  constructor(private el: ElementRef) {}

  @HostListener('dblclick')
  onDblClick() {
    this.el.nativeElement.style.display = 'none';
  }
}
