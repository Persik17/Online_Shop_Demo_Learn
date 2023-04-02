import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTotalComponent } from './cart-total.component';

describe('PriceComponent', () => {
  let component: CartTotalComponent;
  let fixture: ComponentFixture<CartTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CartTotalComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CartTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
