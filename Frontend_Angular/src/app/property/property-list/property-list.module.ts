import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListRoutingModule } from './property-list-routing.module';
import { PropertyListComponent } from './property-list.component';
import { PropertyShopItemComponent } from '../property-shop-item/property-shop-item.component';

@NgModule({
  declarations: [PropertyListComponent, PropertyShopItemComponent],
  imports: [CommonModule, PropertyListRoutingModule],
  exports: [PropertyListComponent, PropertyShopItemComponent],
})
export class PropertyListModule {}
