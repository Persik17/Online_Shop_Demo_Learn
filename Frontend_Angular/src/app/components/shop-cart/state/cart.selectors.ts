import { createFeatureSelector, createSelector } from '@ngrx/store';

import { cartAdapter } from './cart.reducers';

import { CartState } from './cart.state';

const getCartFeatureState = createFeatureSelector<CartState>('cart');

export const getCart = createSelector(
  getCartFeatureState,
  cartAdapter.getSelectors().selectAll
);

export const getCartCount = createSelector(
  getCartFeatureState,
  (state: CartState) => {
    if (!state) return 0;
    else {
      return Object.values(state.entities).reduce(
        (total, current) => (total = total + current.count),
        0
      );
    }
  }
);

export const getCartTotal = createSelector(
  getCartFeatureState,
  (state: CartState) => {
    if (!state) return 0;
    else {
      return Object.values(state.entities).reduce(
        (total, current) =>
          (total = total + current.count * current.item.price),
        0
      );
    }
  }
);
