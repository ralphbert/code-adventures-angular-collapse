import { Component, ContentChild, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CollapseMenuHeaderDirective } from '../../directives/collapse-menu-header.directive';

@Component({
  selector: 'app-collapse-menu',
  templateUrl: './collapse-menu.component.html',
  styleUrls: ['./collapse-menu.component.scss']
})
export class CollapseMenuComponent implements OnInit {
  @Input() title: string = null;
  @Input() open = false;
  @Output() collapseChange = new EventEmitter<boolean>();

  @ContentChild(CollapseMenuHeaderDirective, { static: false }) template: CollapseMenuHeaderDirective;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse() {
    this.open = !this.open;
    this.collapseChange.emit(this.open);
  }

  openCollapse() {
    this.open = true;
    this.collapseChange.emit(this.open);
  }

  closeCollapse() {
    this.open = false;
    this.collapseChange.emit(this.open);
  }
}
