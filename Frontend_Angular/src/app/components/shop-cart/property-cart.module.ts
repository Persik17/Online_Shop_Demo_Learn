import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyCartRoutingModule } from '.';

import {
  PropertyCartComponent,
  PropertyCartItemComponent,
  CartTotalComponent,
  CartPlugComponent,
} from '.';

@NgModule({
  declarations: [
    PropertyCartComponent,
    PropertyCartItemComponent,
    CartTotalComponent,
    CartPlugComponent,
  ],
  imports: [CommonModule, PropertyCartRoutingModule],
  exports: [
    PropertyCartComponent,
    PropertyCartItemComponent,
    CartTotalComponent,
    CartPlugComponent,
  ],
})
export class PropertyCartModule {}
