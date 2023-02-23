import { Injectable } from '@angular/core';

import { Property } from '../model/Property';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = {
    cartItems: [],
  };

  constructor() {}

  addToCard(prop: Property): void {
    this.cart.cartItems.push(prop);
  }

  getCartCount() {
    return this.cart.cartItems.length;
  }

  getCartSum() {
    const sum: number = this.cart.cartItems.reduce(
      (sum, current) => sum + current.price,
      0
    );
    return sum == null ? 0 : sum;
  }

  getCartItems() {
    return this.cart.cartItems;
  }
}
