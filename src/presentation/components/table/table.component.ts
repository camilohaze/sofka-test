import { Component, ViewEncapsulation } from '@angular/core';

import { TableHeader } from './directives/header.directive';
import { TableRow } from './directives/row.directive';
import { TableColumn } from './directives/column.directive';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableHeader,
    TableRow,
    TableColumn
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TableComponent {

}
