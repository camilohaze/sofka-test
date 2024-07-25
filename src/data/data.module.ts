import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { ProductRepository } from '@domain/repositories/product.repository';
import { GetProductUseCase } from '@domain/usecases/get-products.usecase';
import { PostProductUseCase } from '@domain/usecases/post-product.usecase';
import { PutProductUseCase } from '@domain/usecases/put-product.usecase';
import { RemoveProductUseCase } from '@domain/usecases/remove-product.usecase';
import { ValidationProductUseCase } from '@domain/usecases/validation-product.usecase';
import { ProductImplementationRepository } from './repositories/product/product-implementation.repository';

const productsUseCaseFactory = (productRepository: ProductRepository) =>
  new GetProductUseCase(productRepository);
export const productsUseCaseProvider = {
  provide: GetProductUseCase,
  useFactory: productsUseCaseFactory,
  deps: [ProductRepository],
};

const productPostUseCaseFactory = (productRepository: ProductRepository) =>
  new PostProductUseCase(productRepository);
export const productPostUseCaseProvider = {
  provide: PostProductUseCase,
  useFactory: productPostUseCaseFactory,
  deps: [ProductRepository],
};

const productPutUseCaseFactory = (productRepository: ProductRepository) =>
  new PutProductUseCase(productRepository);
export const productPutUseCaseProvider = {
  provide: PutProductUseCase,
  useFactory: productPutUseCaseFactory,
  deps: [ProductRepository],
};

const productRemoveUseCaseFactory = (productRepository: ProductRepository) =>
  new RemoveProductUseCase(productRepository);
export const productRemoveUseCaseProvider = {
  provide: RemoveProductUseCase,
  useFactory: productRemoveUseCaseFactory,
  deps: [ProductRepository],
};

const productValidationUseCaseFactory = (productRepository: ProductRepository) =>
  new ValidationProductUseCase(productRepository);
export const productValidationUseCaseProvider = {
  provide: ValidationProductUseCase,
  useFactory: productValidationUseCaseFactory,
  deps: [ProductRepository],
};

@NgModule({
  providers: [
    productsUseCaseProvider,
    productPostUseCaseProvider,
    productPutUseCaseProvider,
    productRemoveUseCaseProvider,
    productValidationUseCaseProvider,
    { provide: ProductRepository, useClass: ProductImplementationRepository },
  ],
  imports: [CommonModule, HttpClientModule],
  exports: []
})
export class DataModule {}
