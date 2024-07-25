import { TestBed } from '@angular/core/testing';
import { RouterModule, RouterOutlet } from '@angular/router';

import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';

describe('ProductComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        RouterOutlet,
        ProductComponent,
      ],
      providers: [],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set date revision', () => {
    const fixture = TestBed.createComponent(ProductComponent);
    const app = fixture.componentInstance;

    app.onChangeDateRelease({ target: { valueAsNumber: Date.now() } });

    expect(app.form.get('date_revision')?.value).toBeTruthy();
  });
});
