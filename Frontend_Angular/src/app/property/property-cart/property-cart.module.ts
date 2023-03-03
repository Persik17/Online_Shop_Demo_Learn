import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyCartRoutingModule } from './property-cart-routing.module';
import { PropertyCartComponent } from './property-cart.component';
import { PropertyCartItemComponent } from '../property-cart-item/property-cart-item.component';

@NgModule({
  declarations: [PropertyCartComponent, PropertyCartItemComponent],
  imports: [CommonModule, PropertyCartRoutingModule],
  exports: [PropertyCartComponent, PropertyCartItemComponent],
})
export class PropertyCartModule {}
