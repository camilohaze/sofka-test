import { Component, ElementRef, HostListener, ViewChild, ViewEncapsulation } from '@angular/core';

import { MenuItem } from './directives/menu-item.directive';

@Component({
  selector: 'app-menu, menu',
  standalone: true,
  imports: [MenuItem],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  host: {
    'style': 'margin: 0; padding: 0;'
  },
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  open: boolean = false;

  @ViewChild('menu', { static: false }) menu!: ElementRef<HTMLElement>;
  @HostListener('body:click', ['$event'])
  closeMenu(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.menu.nativeElement.removeAttribute('style');
  }

  openMenu(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();

    this.menu.nativeElement.style.display = 'block';
    this.menu.nativeElement.style.left = `${e.pageX - 60}px`;
    this.menu.nativeElement.style.top = `${e.pageY}px`;
  }
}
