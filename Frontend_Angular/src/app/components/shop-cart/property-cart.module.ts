import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyCartRoutingModule } from './property-cart-routing.module';

import { PropertyCartComponent } from './property-cart/property-cart.component';
import { PropertyCartItemComponent } from './property-cart-item/property-cart-item.component';
import { CartTotalComponent } from '../cart-total/cart-total.component';

@NgModule({
  declarations: [PropertyCartComponent, PropertyCartItemComponent, CartTotalComponent],
  imports: [CommonModule, PropertyCartRoutingModule],
  exports: [PropertyCartComponent, PropertyCartItemComponent, CartTotalComponent],
})
export class PropertyCartModule {}
