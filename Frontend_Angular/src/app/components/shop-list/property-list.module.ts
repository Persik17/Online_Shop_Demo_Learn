import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyListRoutingModule } from '.';

import { PropertyListComponent, PropertyShopItemComponent } from '.';

@NgModule({
  declarations: [PropertyListComponent, PropertyShopItemComponent],
  imports: [CommonModule, PropertyListRoutingModule],
  exports: [PropertyListComponent, PropertyShopItemComponent],
})
export class PropertyListModule {}
