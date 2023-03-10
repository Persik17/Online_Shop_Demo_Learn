import { RouterReducerState } from '@ngrx/router-store';

import { PropertyState, initialPropertyState } from './property.state';
import { CartState, initialCartState } from './cart.state';

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
