import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPlugComponent } from './cart-plug.component';

describe('CartPlugComponent', () => {
  let component: CartPlugComponent;
  let fixture: ComponentFixture<CartPlugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartPlugComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartPlugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
