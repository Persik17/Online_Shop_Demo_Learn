import { EntityState } from '@ngrx/entity';

import { Cart } from '../../../models';

import * as fromRoot from '../../../../store/app.state';

export interface CartState extends EntityState<Cart> {
  error: string;
}

export interface AppState extends fromRoot.AppState {
  cartState: CartState;
}

export const initialCartState: CartState = {
  ids: [],
  entities: {},

  error: null,
};
