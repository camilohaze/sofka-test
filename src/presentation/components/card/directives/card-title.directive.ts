import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'card-title',
  host: { class: 'card__title' },
  standalone: true,
})
export class CardTitle {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
