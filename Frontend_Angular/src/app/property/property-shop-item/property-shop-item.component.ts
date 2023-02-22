import { Component, Input, EventEmitter, Output } from '@angular/core';

import { CartService } from 'src/app/service/cart.service';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-shop-item',
  templateUrl: './property-shop-item.component.html',
  styleUrls: ['./property-shop-item.component.css'],
})
export class PropertyShopItemComponent {
  @Output() newItemEvent = new EventEmitter<Property>();
  @Input() property: Property;

  onAddedToCart(value: Property) {
    this.newItemEvent.emit(value);
    console.log(this.property);
  }
}
