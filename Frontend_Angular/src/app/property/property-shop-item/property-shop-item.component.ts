import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-shop-item',
  templateUrl: './property-shop-item.component.html',
  styleUrls: ['./property-shop-item.component.css'],
})
export class PropertyShopItemComponent {
  @Output() onAddedToCartEvent = new EventEmitter<Property>();
  @Input() property: Property;

  onAddedToCart() {
    this.onAddedToCartEvent.emit(this.property);
  }
}
