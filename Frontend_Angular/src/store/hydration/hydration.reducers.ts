import { ActionReducer, Action } from '@ngrx/store';

import * as HydrationActions from './hydration.actions';

import * as fromRoot from "../app.state";

function isHydrateSuccess(
  action: Action
): action is ReturnType<typeof HydrationActions.hydrateSuccess> {
  return action.type === HydrationActions.hydrateSuccess.type;
}

export const hydrationMetaReducer = (
  reducer: ActionReducer<fromRoot.AppState>
): ActionReducer<fromRoot.AppState> => {
  return (state, action) => {
    if (isHydrateSuccess(action)) {
      return action.state;
    } else {
      return reducer(state, action);
    }
  };
};
