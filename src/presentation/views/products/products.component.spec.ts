import { TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, ProductsComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should change filter items to 10', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;

    app.onFilterChange({ target: { value: 10 } });

    expect(app.items).toEqual(10);
  });

  it('should search product', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    const products = [
      {
        id: 'trj-crd-a',
        name: 'Tarjetas de Crédito VIEJA',
        description: 'Tarjeta de consumo bajo la modalidad de crédito',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        date_release: '2024-07-25',
        date_revision: '2025-07-25',
      },
      {
        id: 'trj-crd-b',
        name: 'Tarjetas de Crédito NUEVA',
        description: 'Tarjeta de consumo bajo la modalidad de crédito',
        logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
        date_release: '2024-07-25',
        date_revision: '2025-07-25',
      },
    ];

    app.products = products;
    app.onSearch('nueva');

    expect(app.productsFiltered).toHaveLength(1);
  });

  it('should delete product', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const app = fixture.componentInstance;
    const product = {
      id: 'trj-crd-a',
      name: 'Tarjetas de Crédito VIEJA',
      description: 'Tarjeta de consumo bajo la modalidad de crédito',
      logo: 'https://www.visa.com.ec/dam/VCOM/regional/lac/SPA/Default/Pay%20With%20Visa/Tarjetas/visa-signature-400x225.jpg',
      date_release: '2024-07-25',
      date_revision: '2025-07-25',
    };
    app.onRemove(product);
    app.onConfirm(true);

    expect(app.product).toMatchObject(product);
  });
});
