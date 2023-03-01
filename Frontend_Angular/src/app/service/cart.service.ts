import { Injectable } from '@angular/core';

import { Property } from '../model/Property';
import { Cart } from '../model/Cart';

import { BehaviorSubject, find, map, pipe, Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart[] = [];
  private cartItemsCount = new BehaviorSubject(null);

  constructor() {}

  addToCart(prop: Property): void {
    let propCart: Cart = {
      item: prop,
      count: 1,
    };

    //checking on exist item in cart else just +1 to count
    if (this.cart.find((p) => p.item.id == propCart.item.id) == null) {
      this.cart.push(propCart);
      console.log(propCart);
    } else {
      this.cart.find((p) => p.item.id == propCart.item.id).count++;
    }
  }

  getCartCount() {
    return this.cartItemsCount.pipe(
      map((cart) => {
        cart.reduce((sum: number, current: Cart) => sum + current.count, 0);
      })
    );
  }

  getCartSum() {
    const sum: number = this.cart.reduce(
      (sum, current) => sum + current.item.price * current.count,
      0
    );
    return sum == null ? 0 : sum;
  }

  getCartItems() {
    console.log(this.cart);
    return this.cart;
  }
}
