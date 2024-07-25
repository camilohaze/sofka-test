import { Observable } from 'rxjs';

import { UseCase } from '@base/use-case';

import { ProductRepository } from '@domain/repositories/product.repository';

export class ValidationProductUseCase
  implements UseCase<string, boolean>
{
  constructor(private productRepository: ProductRepository) {}

  execute(id: string): Observable<boolean> {
    return this.productRepository.verification(id);
  }
}
