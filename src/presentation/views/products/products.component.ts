import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ProductImplementationRepository } from '@data/repositories/product/product-implementation.repository';
import { ProductModel } from '@domain/models/product.model';

import { TableComponent } from '@presentation/components/table/table.component';
import { AvatarComponent } from '@presentation/components/avatar/avatar.component';
import { MenuComponent } from '@presentation/components/menu/menu.component';
import { MenuItem } from '@presentation/components/menu/directives/menu-item.directive';
import { ModalComponent } from '@presentation/components/modal/modal.component';
import { ModalContent } from "@presentation/components/modal/directives/modal-content.directive";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    RouterOutlet,
    TableComponent,
    AvatarComponent,
    MenuComponent,
    MenuItem,
    ModalComponent,
    ModalContent
],
  providers: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  product?: ProductModel;
  products: ProductModel[] = [];
  productsFiltered: ProductModel[] = [];

  private router: Router = inject(Router);

  constructor(private productRepository: ProductImplementationRepository) {
    this.productRepository.getAll().subscribe({
      next: (products) => {
        this.products = products.data;
        this.productsFiltered = products.data.slice(0, 5);
      },
    });
  }

  onFilterChange(e: any): void {
    const { value } = e.target;

    this.productsFiltered = this.products.slice(0, value);
    console.log(e, value, 'onFilterChange');
  }

  onAddProduct(): void {
    this.router.navigate(['product'])
  }

  onEdit(product: ProductModel): void {
    this.router.navigate(['product', product.id]);
  }

  onRemove(product: ProductModel): void {
    this.product = product;
  }

  onConfirm(confirm: boolean): void {
    if (confirm && this.product) {
      const { id } = this.product;

      this.productRepository.remove(id).subscribe({
        next: (response) => {
          alert(response.message);

          this.product = undefined;
        }
      });
    } else {
      this.product = undefined;
    }
  }
}
