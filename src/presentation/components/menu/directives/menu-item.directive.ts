import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'menu-item',
  host: { class: 'menu__item' },
  standalone: true,
})
export class MenuItem {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}
