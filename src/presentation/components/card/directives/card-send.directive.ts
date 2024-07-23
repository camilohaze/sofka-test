import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'card-send',
  host: { class: 'card__send' },
  standalone: true,
})
export class CardSend {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
