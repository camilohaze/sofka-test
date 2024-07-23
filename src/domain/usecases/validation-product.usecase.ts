import { Observable } from 'rxjs';

import { UseCase } from 'src/base/use-case';

import { ProductRepository } from '../repositories/product.repository';

export class ValidationProductUseCase
  implements UseCase<string, boolean>
{
  constructor(private productRepository: ProductRepository) {}

  execute(id: string): Observable<boolean> {
    return this.productRepository.verification(id);
  }
}
