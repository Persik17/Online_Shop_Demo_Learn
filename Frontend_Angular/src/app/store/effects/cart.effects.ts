import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  map,
  catchError,
  mergeMap,
  switchMap,
  withLatestFrom,
  tap,
} from 'rxjs/operators';

import { AppState } from '../state/app.state';

import {
  CartEnumActions,
  AddToCart,
  AddToCartSuccess,
  AddToCartFail,
  GetCartSuccess,
  GetCartFail,

} from '../actions/cart.actions';

import { CartService } from '../../services';

import { Cart, Property } from 'src/app/models';
import { GetPropertyFail, GetPropertySuccess } from '../actions/property.actions';

@Injectable({ providedIn: 'root' })
export class CartEffects {
  getCart$ = createEffect(() =>
    this._actions$.pipe(
      ofType(CartEnumActions.GetCartItems),
      switchMap(() =>
        this._cartService.getCart().pipe(
          map((cart: Cart[]) => new GetCartSuccess(cart)),
          catchError((error) => of(new GetCartFail(error)))
        )
      )
    )
  );

  constructor(
    private _cartService: CartService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
