import { Directive, ElementRef } from '@angular/core';
// elementref hace referencia a un elemento
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(
    element: ElementRef // asi se resuelven dependencias en angular
  ) {
    element.nativeElement.style.backgroundColor = 'red';
  }

}
