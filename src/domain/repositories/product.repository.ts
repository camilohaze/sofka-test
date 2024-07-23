import { Observable } from 'rxjs';

import { ProductResponseModel } from '../models/product-response.model';
import { ProductRemoveModel } from '../models/product-remove.model';
import { ProductModel } from '../models/product.model';

export abstract class ProductRepository {
  abstract getAll(): Observable<ProductResponseModel<ProductModel[]>>;
  abstract getById(id: string): Observable<ProductModel>;
  abstract post(product: ProductModel): Observable<ProductResponseModel<ProductModel>>;
  abstract put(product: ProductModel): Observable<ProductResponseModel<ProductModel>>;
  abstract remove(id: string): Observable<ProductRemoveModel>;
  abstract verification(id: string): Observable<boolean>;
}
