import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart = {
    cartItems: [
      {
        id: 1,
        title: '123',
        price: 50,
        description: 'dwqer3cqre',
        category: 'dwefv',
        image: '',
        rating: {
          rate: 12,
          count: 5,
        },
      },
      {
        id: 2,
        title: 'Title',
        price: 50,
        description: 'BBQ',
        category: 'super',
        image: '',
        rating: {
          rate: 11,
          count: 1,
        },
      },
      {
        id: 3,
        title: 'vvQ',
        price: 50,
        description: 'zzzzz sleep',
        category: 'noncategory',
        image: '',
        rating: {
          rate: 9,
          count: 90,
        },
      },
    ],
  };

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
