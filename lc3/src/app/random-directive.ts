import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomDirective]',
})
export class RandomDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    this.el.nativeElement.style.backgroundColor = randomColor;
  }
}
