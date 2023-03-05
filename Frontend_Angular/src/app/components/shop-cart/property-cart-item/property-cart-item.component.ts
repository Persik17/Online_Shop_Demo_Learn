import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from 'src/app/models/property.model';

import { Cart } from '../../../models/cart.model';

@Component({
  selector: 'app-property-cart-item',
  templateUrl: './property-cart-item.component.html',
  styleUrls: ['./property-cart-item.component.css'],
})
export class PropertyCartItemComponent {
  @Input() cartProp: Cart;
  @Output() onDeleteFromCart = new EventEmitter<Property>();
  @Output() onAddToCart = new EventEmitter<Property>();

  onDelete() {
    this.onDeleteFromCart.emit(this.cartProp.item);
  }

  onAdd() {
    this.onAddToCart.emit(this.cartProp.item);
  }
}
