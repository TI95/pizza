import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChickenDirective {

  constructor(
    private templateRef:TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  @Input()
  set isChicken(description:string) {
    if (description.toLocaleLowerCase().includes('курица')){
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
