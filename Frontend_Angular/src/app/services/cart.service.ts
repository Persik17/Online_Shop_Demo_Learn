import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { filter, find, map, Observable } from 'rxjs';

import { Property, Cart } from '../models';

import { AddToCart, DeleteFromCart, GetCartItems, GetCartSuccess } from '../store/actions/cart.actions';

import {
  getCart,
  getCartCount,
  getCartTotal,
} from '../store/selectors/cart.selectors';

import { AppState } from '../store/state/app.state';

export const key = 'cartState';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private isInit = false;

  public cart: Observable<Cart[]> = this.store.pipe(select(getCart));

  constructor(private store: Store<AppState>) {}

  init() {
    if (this.isInit) {
      return;
    }

    this.isInit = true;
    this.loadFromStorage();

    this.store
      .pipe(
        select(getCart),
        filter((state) => !!state)
      )
      .subscribe((state) => {
        localStorage.setItem(key, JSON.stringify(state));
      });

    window.addEventListener('storage', () => this.loadFromStorage());
  }

  private loadFromStorage() {
    const storageState = localStorage.getItem(key);
    if (storageState) {
      this.store.dispatch(
        new GetCartItems({
          state: JSON.parse(storageState),
        })
      );
    }
  }

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
