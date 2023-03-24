import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';

import { AppState } from './app.state';

import { propertyReducers } from '../app/components/shop-list/state/property.reducers';
import { cartReducers } from '../app/components/shop-cart/state/cart.reducers';
import { hydrationMetaReducer } from './hydration/hydration.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  prop: propertyReducers,
  cart: cartReducers,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];

