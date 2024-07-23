import { Routes } from '@angular/router';
import { ProductComponent } from '@presentation/views/product/product.component';

import { ProductsComponent } from '@presentation/views/products/products.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products',
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];
