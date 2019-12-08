import { NgModule } from '@angular/core';
import { CollapseComponent } from './components/collapse/collapse.component';
import { CommonModule } from '@angular/common';
import { CollapseMenuComponent } from './components/collapse-menu/collapse-menu.component';
import { CollapseMenuHeaderDirective } from './directives/collapse-menu-header.directive';
import { AccordionComponent } from './components/accordion/accordion.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CollapseComponent,
    CollapseMenuComponent,
    CollapseMenuHeaderDirective,
    AccordionComponent,
  ],
  exports: [
    CollapseComponent,
    CollapseMenuComponent,
    CollapseMenuHeaderDirective,
    AccordionComponent,
  ],
})
export class CollapseModule {

}
