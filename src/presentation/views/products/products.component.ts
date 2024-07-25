import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

import { ProductImplementationRepository } from '@data/repositories/product/product-implementation.repository';
import { ProductModel } from '@domain/models/product.model';

import { TableComponent } from '@presentation/components/table/table.component';
import { AvatarComponent } from '@presentation/components/avatar/avatar.component';
import { MenuComponent } from '@presentation/components/menu/menu.component';
import { MenuItem } from '@presentation/components/menu/directives/menu-item.directive';
import { ModalComponent } from '@presentation/components/modal/modal.component';
import { ModalContent } from '@presentation/components/modal/directives/modal-content.directive';

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
    ModalContent,
  ],
  providers: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  product?: ProductModel;
  products: ProductModel[] = [];
  productsFiltered: ProductModel[] = [];
  items: number = 5;

  private router: Router = inject(Router);
  private productRepository: ProductImplementationRepository = inject(
    ProductImplementationRepository
  );

  constructor() {
    this.productRepository.getAll().subscribe({
      next: (products) => {
        this.products = products.data;
        this.productsFiltered = products.data.slice(0, this.items);
      },
    });
  }

  onFilterChange(e: any): void {
    const { value } = e.target;

    this.items = value;
    this.productsFiltered = this.products.slice(0, this.items);
  }

  onSearch(query: string): void {
    this.productsFiltered = this.products
      .filter((p) => this.normalize(p.name).includes(this.normalize(query)))
      .slice(0, this.items);
  }

  onAddProduct(): void {
    this.router.navigate(['product']);
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

          const index = this.products.findIndex((p) => p.id === id);

          this.products.splice(index, 1);
          this.products = this.products;
          this.productsFiltered = this.products.slice(0, this.items);

          this.product = undefined;
        },
      });
    } else {
      this.product = undefined;
    }
  }

  private normalize(value: string): string {
    return value
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
