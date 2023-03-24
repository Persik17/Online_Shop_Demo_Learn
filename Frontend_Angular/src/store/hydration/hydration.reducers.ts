import { ActionReducer, Action } from '@ngrx/store';

import * as HydrationActions from './hydration.actions';

import { CartState } from '../../app/components/shop-cart/state/cart.state';

function isHydrateSuccess(
  action: Action
): action is ReturnType<typeof HydrationActions.hydrateSuccess> {
  return action.type === HydrationActions.hydrateSuccess.type;
}

export const hydrationMetaReducer = (
  reducer: ActionReducer<CartState>
): ActionReducer<CartState> => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
