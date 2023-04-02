import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { filter, find, map, Observable } from 'rxjs';

import { Property, Cart } from '../models';

import {
  AddToCart,
  DeleteFromCart,
} from '../components/shop-cart/state/cart.actions';

import {
  getCart,
  getCartCount,
  getCartTotal,
} from '../components/shop-cart/state/cart.selectors';

import { AppState } from '../../store/app.state';

export const key = 'cartState';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isInit = false;

  public cart: Observable<Cart[]> = this.store.pipe(select(getCart));

  constructor(private store: Store<AppState>) {}

  addToCart(prop: Property) {
    let propCart: Cart = {
      id: prop.id,
      item: prop,
      count: 1,
    };

    this.store.dispatch(new AddToCart(propCart));
  }

  deleteFromCart(cartItem: Cart) {
    try {
      this.store.dispatch(new DeleteFromCart(cartItem.id));
    } catch (e) {
      console.log(e);
    }
  }

  getCart(): Observable<Cart[]> {
    return this.cart;
  }

  getCartCount(): Observable<number> {
    return this.store.pipe(select(getCartCount));
  }

  getCartTotal(): Observable<number> {
    return this.store.pipe(select(getCartTotal));
  }
}
