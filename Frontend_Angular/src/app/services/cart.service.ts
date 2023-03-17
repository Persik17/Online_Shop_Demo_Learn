import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { find, map, Observable } from 'rxjs';

import { Property, Cart } from '../models';

import { AddToCart, DeleteFromCart } from '../store/actions/cart.actions';

import {
  getCart,
  getCartCount,
  getCartTotal,
} from '../store/selectors/cart.selectors';

import { AppState } from '../store/state/app.state';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly key: string = 'cartItems';

  public cart: Observable<Cart[]> = this.store.pipe(select(getCart));

  constructor(private store: Store<AppState>) {
    /* this.load(); */
  }

  /* load() {
    if (localStorage.getItem(this.key) != null) {
      let cart: Observable<Cart[]> = JSON.parse(localStorage.getItem(this.key));
    } else localStorage.setItem(this.key, JSON.stringify([]));
  } */

  /* updateCart() {
    localStorage.setItem(this.key, JSON.stringify(this.cart));
  } */

  addToCart(prop: Property) {
    let propCart: Cart = {
      id: prop.id,
      item: prop,
      count: 1,
    };

    this.store.dispatch(new AddToCart(propCart));
    /* this.updateCart(); */
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

  public getCartCount(): Observable<number> {
    return this.store.pipe(select(getCartCount));
  }

  public getCartTotal(): Observable<number> {
    return this.store.pipe(select(getCartTotal));
  }
}
