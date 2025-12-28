import { Component, signal } from '@angular/core';
import { BgRandom } from './bg-random/bg-random';
import { DoubleClick } from './double-click/double-click';
import { ClickCounter } from './click-counter/click-counter';

@Component({
  selector: 'app-root',
  imports: [BgRandom, DoubleClick, ClickCounter],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('lc3');
}
