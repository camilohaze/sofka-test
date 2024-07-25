import { Observable } from 'rxjs';

import { UseCase } from '@base/use-case';

import { ProductResponseModel } from '@domain/models/product-response.model';
import { ProductModel } from '@domain/models/product.model';
import { ProductRepository } from '@domain/repositories/product.repository';

export class GetProductUseCase
  implements UseCase<void, ProductResponseModel<ProductModel[]>>
{
  constructor(private productRepository: ProductRepository) {}

  execute(): Observable<ProductResponseModel<ProductModel[]>> {
    return this.productRepository.getAll();
  }
}
