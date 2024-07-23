import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card, card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  host: {
    'style': 'display: block; width: max-content; margin: 0 auto;',
  },
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {}
