import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: '[column]',
  host: {'class': 'table__column'},
  standalone: true,
})
export class TableColumn {
  constructor(public elementRef: ElementRef<HTMLElement>) {}
}