import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
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
