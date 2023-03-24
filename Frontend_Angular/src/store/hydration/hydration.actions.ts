import { createAction, props } from '@ngrx/store';

import { CartState } from '../../app/components/shop-cart/state/cart.state';

export const hydrate = createAction('[Hydration] Hydrate');

export const hydrateSuccess = createAction(
  '[Hydration] Hydrate Success',
  props<{ state: CartState }>()
);

export const hydrateFailure = createAction('[Hydration] Hydrate Failure');
