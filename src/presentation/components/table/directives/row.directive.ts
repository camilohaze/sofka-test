import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[row]',
  host: {'class': 'table__row'},
  standalone: true,
})
export class TableRow {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}