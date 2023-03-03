import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCartItemComponent } from './property-cart-item.component';

describe('PropertyCartItemComponent', () => {
  let component: PropertyCartItemComponent;
  let fixture: ComponentFixture<PropertyCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyCartItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
