import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'card-content',
  host: { class: 'card__content' },
  standalone: true,
})
export class CardContent {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
