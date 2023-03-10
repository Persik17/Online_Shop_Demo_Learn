import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-property-shop-item',
  templateUrl: './property-shop-item.component.html',
  styleUrls: ['./property-shop-item.component.css'],
})
export class PropertyShopItemComponent {
  @Input() property: Property;
  @Output() onAddedToCartEvent = new EventEmitter<Property>();

  onAddedToCart() {
    this.onAddedToCartEvent.emit(this.property);
  }
}
