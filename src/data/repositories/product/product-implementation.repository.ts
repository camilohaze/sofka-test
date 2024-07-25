import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProductEntity } from './entities/product-entity';
import { ProductRepository } from '@domain/repositories/product.repository';
import { ProductResponseModel } from '@domain/models/product-response.model';
import { ProductModel } from '@domain/models/product.model';
import { ProductRemoveModel } from '@domain/models/product-remove.model';

@Injectable({
  providedIn: 'root',
})
export class ProductImplementationRepository extends ProductRepository {
  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<ProductResponseModel<ProductModel[]>> {
    return this.http.get<ProductResponseModel<ProductEntity[]>>(
      'http://localhost:3002/bp/products'
    );
  }

  getById(id: string): Observable<ProductModel> {
    return this.http.get<ProductEntity>(
      `http://localhost:3002/bp/products/${id}`
    );;
  }

  post(product: ProductModel): Observable<ProductResponseModel<ProductModel>> {
    return this.http.post<ProductResponseModel<ProductEntity>>(
      'http://localhost:3002/bp/products',
      product
    );
  }

  put(
    product: ProductModel
  ): Observable<ProductResponseModel<ProductModel>> {
    const { id } = product;

    return this.http.put<ProductResponseModel<ProductEntity>>(
      `http://localhost:3002/bp/products/${id}`,
      product
    );
  }

  remove(id: string): Observable<ProductRemoveModel> {
    return this.http.delete<ProductResponseModel<ProductRemoveModel>>(
      `http://localhost:3002/bp/products/${id}`
    );
  }

  verification(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:3002/bp/products/${id}`);
  }
}
