import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'card-reset',
  host: { class: 'card__reset' },
  standalone: true,
})
export class CardReset {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
