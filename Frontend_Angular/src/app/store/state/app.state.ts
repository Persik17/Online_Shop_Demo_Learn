import { RouterReducerState } from '@ngrx/router-store';

import { PropertyState, initialPropertyState } from './property.state';

export interface AppState {
  router?: RouterReducerState;
  prop: PropertyState;
}

export const initialAppState: AppState = {
  prop: initialPropertyState,
};

export function getInitialState(): AppState {
  return initialAppState;
}
