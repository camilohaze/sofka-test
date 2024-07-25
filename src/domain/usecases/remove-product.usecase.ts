import { Observable } from 'rxjs';

import { UseCase } from '@base/use-case';

import { ProductRemoveModel } from '@domain/models/product-remove.model';
import { ProductRepository } from '@domain/repositories/product.repository';

export class RemoveProductUseCase
  implements UseCase<string, ProductRemoveModel>
{
  constructor(private productRepository: ProductRepository) {}

  execute(id: string): Observable<ProductRemoveModel> {
    return this.productRepository.remove(id);
  }
}
