import { RouterReducerState } from '@ngrx/router-store';

import { initialPropertyState, PropertyState } from 'src/app/components/shop-list/state/property.state';
import { CartState, initialCartState } from 'src/app/components/shop-cart/state/cart.state';

export interface AppState {
  router?: RouterReducerState;
  prop: PropertyState;
  cart: CartState;
}

export const initialAppState: AppState = {
  prop: initialPropertyState,
  cart: initialCartState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
