import {
  Component,
  Directive,
  ElementRef,
  Renderer
} from '@angular/core';
@Directive({
  selector: '[x-large]'
})
export class XLargeDirective {
  constructor(
    public element: ElementRef,
    public renderer: Renderer
  ) {
     renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
  }
}
