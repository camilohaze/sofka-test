import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

import { ProductImplementationRepository } from '@data/repositories/product/product-implementation.repository';

import { CardComponent } from '@presentation/components/card/card.component';
import { CardTitle } from '@presentation/components/card/directives/card-title.directive';
import { CardContent } from '@presentation/components/card/directives/card-content.directive';
import { CardReset } from '@presentation/components/card/directives/card-reset.directive';
import { CardSend } from '@presentation/components/card/directives/card-send.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CardComponent,
    CardTitle,
    CardContent,
    CardReset,
    CardSend,
  ],
  providers: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  productId?: string;

  min: Date = new Date();
  minDate: string = this.formatDate(this.min);
  oneYear: string = this.addOneYear(this.min).toLocaleDateString();

  form: FormGroup = this.formBuilder.group({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200),
    ]),
    logo: new FormControl('', [Validators.required]),
    date_release: new FormControl('', [Validators.required]),
    date_revision: new FormControl({ value: '', disabled: true }, [
      Validators.required,
    ]),
  });

  private router: Router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private formBuilder: FormBuilder,
    private productRepository: ProductImplementationRepository
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];

    if (!!this.productId) {
      this.productRepository.getById(this.productId).subscribe({
        next: (product) => {
          this.form.patchValue(product);
          this.form.get('id')?.disable();
        },
      });
    }
  }

  onChangeDateRelease(e: any): void {
    const {
      target: { valueAsNumber },
    } = e;

    const date = this.addOneYear(new Date(valueAsNumber));

    this.form.get('date_revision')?.patchValue(this.formatDate(date));
  }

  onReset(): void {
    this.form.reset();
  }

  onSubmit(): void {
    if (this.form.dirty && this.form.valid) {
      const productId = this.activatedRoute.snapshot.params['id'];

      if (!!productId) {
        this.productRepository.put(this.form.getRawValue()).subscribe({
          next: (response) => {
            alert(response.message);
            this.router.navigate(['products']);
          },
        });
      } else {
        this.productRepository.post(this.form.getRawValue()).subscribe({
          next: (response) => {
            alert(response.message);
            this.router.navigate(['products']);
          },
        });
      }
    }

    this.form.updateValueAndValidity();
    this.form.markAllAsTouched();
  }

  private formatDate(date: Date): string {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  private addOneYear(date: Date): Date {
    date.setDate(date.getDate() + 1);
    date.setFullYear(date.getFullYear() + 1);

    return date;
  }
}
