import { EntityState } from "@ngrx/entity";

import { Cart } from '../../models';

export interface CartState extends EntityState<Cart> {
  selectedLineItemId: number | null,
  error: any
}

export const initialCartState: CartState = {
  ids: [],
  entities: {},
  selectedLineItemId: null,
  error: null,
};
