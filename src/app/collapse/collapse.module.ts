import { NgModule } from '@angular/core';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CommonModule } from '@angular/common';
import { CollapseMenuComponent } from './components/collapse-menu/collapse-menu.component';
import { CollapseMenuHeaderDirective } from './directives/collapse-menu-header.directive';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CollapseComponent,
    CollapseMenuComponent,
    CollapseMenuHeaderDirective,
  ],
  exports: [
    CollapseComponent,
    CollapseMenuComponent,
    CollapseMenuHeaderDirective,
  ],
})
export class CollapseModule {

}
