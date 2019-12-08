import { Component, HostBinding, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('collapse', [
      transition(':enter', [
        style({ height: 0, paddingTop: 0, paddingBottom: 0 }),
        animate('0.25s ease-out', style({
          height: '*',
          paddingTop: '*',
          paddingBottom: '*',
        }))
      ]),
      transition(':leave', [
        animate('0.25s ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
        }))
      ]),
    ])
  ]
})
export class CollapseComponent {
  @Input() open = false;

  @HostBinding('class.open') get isOpen() {
    return this.open;
  }

  @HostBinding('class.closed') get isClosed() {
    return !this.open;
  }
}
