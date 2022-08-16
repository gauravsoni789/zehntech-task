import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeatilComponent } from './product-detail.component';

describe('ProductDeatilComponent', () => {
  let component: ProductDeatilComponent;
  let fixture: ComponentFixture<ProductDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDeatilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
