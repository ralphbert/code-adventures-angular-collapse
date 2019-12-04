import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appCollapseMenuHeader]'
})
export class CollapseMenuHeaderDirective {

  constructor(public templateRef: TemplateRef<any>) { }

}
