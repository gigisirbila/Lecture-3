import { Component } from '@angular/core';
import { DoubleClickDirective } from '../double-click-directive';

@Component({
  selector: 'app-double-click',
  imports: [DoubleClickDirective],
  templateUrl: './double-click.html',
  styleUrl: './double-click.css',
})
export class DoubleClick {}
