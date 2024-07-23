import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[header]',
  host: {'class': 'table__header'},
  standalone: true,
})
export class TableHeader {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}