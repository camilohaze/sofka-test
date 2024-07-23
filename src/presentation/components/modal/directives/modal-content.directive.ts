import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'modal-content',
  standalone: true,
})
export class ModalContent {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
