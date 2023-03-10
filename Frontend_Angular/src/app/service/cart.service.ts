import { Injectable } from '@angular/core';

import { Property } from '../model/Property';
import { Cart } from '../model/Cart';

import { BehaviorSubject, map, Observable, Subject, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart$: BehaviorSubject<Cart[]> = new BehaviorSubject<Cart[]>([]);
  cart: Observable<Cart[]> = this.cart$.asObservable();

  count$ = new BehaviorSubject(0);
  count: number = 0;

  constructor() {}

  addToCart(prop: Property) {
    //checking on exist item in cart else just +1 to count
    if (this.cart$.value.find((p) => p.item.id == prop.id) == null) {
      let propCart: Cart = {
        item: prop,
        count: 1,
      };

      this.cart$.value.push(propCart);
    } else {
      this.cart$.value.find((p) => p.item.id == prop.id).count++;
    }

    this.count++;
    this.count$.next(this.count);
  }

  getCartSum() {
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

  getCartItems() {
    return this.cart$.asObservable();
  }
}
