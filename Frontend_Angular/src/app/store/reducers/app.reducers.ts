import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { AppState } from '../state/app.state';
import { propertyReducers } from './property.reducers';

export const appReducers: ActionReducerMap<AppState, any> = {
  router: routerReducer,
  prop: propertyReducers,
};
