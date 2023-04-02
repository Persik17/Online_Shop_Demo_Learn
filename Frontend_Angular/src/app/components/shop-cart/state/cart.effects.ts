import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { AppState } from '../../../../store/app.state';

import { CartEnumActions, GetCartSuccess, GetCartFail } from './cart.actions';

import { CartService } from '../../../services';

import { Cart } from 'src/app/models';

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
