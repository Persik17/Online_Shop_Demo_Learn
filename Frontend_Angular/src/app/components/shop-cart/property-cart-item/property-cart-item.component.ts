import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Cart } from '../../../models';

@Component({
  selector: 'app-property-cart-item',
  templateUrl: './property-cart-item.component.html',
  styleUrls: ['./property-cart-item.component.css'],
})
export class PropertyCartItemComponent {
  @Input() cartProp: Cart;
  @Output() onDeleteFromCart = new EventEmitter<Cart>();
  @Output() onAddToCart = new EventEmitter<Cart>();

  onDelete() {
    this.onDeleteFromCart.emit(this.cartProp);
  }

  onAdd() {
    this.onAddToCart.emit(this.cartProp);
  }
}
