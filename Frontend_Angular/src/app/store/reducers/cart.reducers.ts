import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';

import { Cart } from '../../models';

import { CartEnumActions, CartActions } from '../actions/cart.actions';

import { initialCartState, CartState } from '../state/cart.state';

export const cartAdapter: EntityAdapter<Cart> = createEntityAdapter<Cart>();

export const initialState = cartAdapter.getInitialState(initialCartState);

export function cartReducers(
  state = initialCartState,
  action: CartActions
): CartState {
  switch (action.type) {
    case CartEnumActions.AddToCartFail: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CartEnumActions.AddToCart: {
      let currentCart: Cart = state.entities[action.payload.id];

      if (currentCart !== undefined) {
        const updateCartItem: Cart = {
          id: currentCart.id,
          item: currentCart.item,
          count: currentCart.count + 1,
        };

        return cartAdapter.updateOne(
          { id: currentCart.id, changes: updateCartItem },
          state
        );
      } else {
        /* action.payload.id + 1; */

        return cartAdapter.addOne(action.payload, state);
      }
    }

    case CartEnumActions.DeleteFromCartFail: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case CartEnumActions.DeleteFromCart: {
      let currentCart: Cart | undefined = state.entities[action.payload];
      if (currentCart !== undefined && currentCart.count > 1) {
        const updateItem: Cart = {
          id: currentCart.id,
          item: currentCart.item,
          count: currentCart.count - 1,
        };
        return cartAdapter.updateOne(
          { id: currentCart.id, changes: updateItem },
          state
        );
      } else {
        return cartAdapter.removeOne(action.payload, state);
      }
    }

    default: {
      return state;
    }
  }
}
