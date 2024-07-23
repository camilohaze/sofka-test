import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

import { ModalContent } from './directives/modal-content.directive';

@Component({
  selector: 'app-modal, modal',
  standalone: true,
  imports: [ModalContent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent {
  @Input() open: boolean = false;
  @Output() onConfirm: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @ViewChild('modal', { static: false }) modal!: ElementRef<HTMLElement>;
  @HostListener('body:click', ['$event'])
  closeModal(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();

    this.modal.nativeElement.removeAttribute('style');
  }

  openModal(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();

    this.modal.nativeElement.style.display = 'block';
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { open } = changes;

    if (open.currentValue) {
      console.log(this.modal.nativeElement, 'modal');
      setTimeout(() => {
        this.modal.nativeElement.style.display = 'block';
      }, 0);
    }
  }

  cancel(): void {
    this.onConfirm.emit(false);
  }

  confirm(): void {
    this.onConfirm.emit(false);
  }
}
