import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart;

  constructor() {}

  addToCard(prop: Property): void {
    this.cart.cartItems.push(prop);
  }

  getCartCount() {
    return this.cart.cartItems.length;
  }

  getCartSum() {
    return this.cart.cartItems.reduce((sum, current) => sum + current.price, 0)
  }

  getCartItems() {
    return this.cart.cartItems;
  }
}
