import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyShopItemComponent } from './property-shop-item.component';

describe('PropertyCardComponent', () => {
  let component: PropertyShopItemComponent;
  let fixture: ComponentFixture<PropertyShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropertyShopItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
