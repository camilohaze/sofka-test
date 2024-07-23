import { Observable } from 'rxjs';

import { UseCase } from 'src/base/use-case';

import { ProductResponseModel } from '../models/product-response.model';
import { ProductModel } from '../models/product.model';
import { ProductRepository } from '../repositories/product.repository';

export class GetProductUseCase
  implements UseCase<void, ProductResponseModel<ProductModel[]>>
{
  constructor(private productRepository: ProductRepository) {}

  execute(): Observable<ProductResponseModel<ProductModel[]>> {
    return this.productRepository.getAll();
  }
}
