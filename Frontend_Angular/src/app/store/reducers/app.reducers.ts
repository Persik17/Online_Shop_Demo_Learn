import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';

import { AppState } from '../state/app.state';

import { propertyReducers } from './property.reducers';
import { cartReducers } from './cart.reducers';
import { hydrationMetaReducer } from './hydration.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  prop: propertyReducers,
  cart: cartReducers,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
