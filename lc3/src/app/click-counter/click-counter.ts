import { Component } from '@angular/core';
import { ClickCounterDirective } from '../click-counter-directive';

@Component({
  selector: 'app-click-counter',
  imports: [ClickCounterDirective],
  templateUrl: './click-counter.html',
  styleUrl: './click-counter.css',
})
export class ClickCounter {
  handleClick(data: { event: MouseEvent; count: number }) {
    console.log('Event:', data.event);
    console.log('Click count:', data.count);
  }
}
