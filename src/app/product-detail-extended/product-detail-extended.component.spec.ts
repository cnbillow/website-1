import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailExtendedComponent } from './product-detail-extended.component';

describe('ProductDetailExtendedComponent', () => {
  let component: ProductDetailExtendedComponent;
  let fixture: ComponentFixture<ProductDetailExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
