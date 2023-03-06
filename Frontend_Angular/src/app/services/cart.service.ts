import { Injectable } from '@angular/core';

import { Property } from '../models/property.model';
import { Cart } from '../models/cart.model';

import { BehaviorSubject, map, Observable, Subject, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);
  cart: Cart[] = [];

  constructor() {}

  addToCart(prop: Property) {
    if (prop) {
      let cart = this.cart$.value.find((p) => p.item.id == prop.id);

      if (cart) {
        cart.count++;
      } else {
        let id = 1;

        id = Math.max.apply(
          null,
          this.cart.map((item) => item.id)
        );

        let propCart: Cart = {
          id: id + 1,
          item: prop,
          count: 1,
        };

        this.cart$.value.push(propCart);
      }

      this.cart$.next(this.cart);
    }
  }

  deleteFromCart(prop: Property) {
    try {
      if (prop) {
        let cart = this.cart$.value.find((p) => p.item.id == prop.id);

        if (cart.count > 1) {
          cart.count--;
        } else {
          this.cart.splice(this.cart.indexOf(cart), 1);
        }

        this.cart$.next(this.cart);
      }
    } catch (e) {
      console.log(e);
    }
  }

  getCartCount(): Observable<number> {
    return this.cart$
      .asObservable()
      .pipe(
        map((order) => order.reduce((sum, current) => sum + current.count, 0))
      );
  }

  getCartSum(): Observable<number> {
    return this.cart$
      .asObservable()
      .pipe(
        map((order) =>
          order.reduce(
            (sum, current) => sum + current.item.price * current.count,
            0
          )
        )
      );
  }

  getCartItems(): Observable<Cart[]> {
    return this.cart$.asObservable();
  }
}
