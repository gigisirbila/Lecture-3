import { Component } from '@angular/core';
import { RandomDirective } from '../random-directive';
@Component({
  selector: 'app-bg-random',
  imports: [RandomDirective],
  templateUrl: './bg-random.html',
  styleUrl: './bg-random.css',
})
export class BgRandom {}
