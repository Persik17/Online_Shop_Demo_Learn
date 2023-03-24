import { createAction, props } from '@ngrx/store';

import * as fromRoot from "../app.state";

export const hydrate = createAction('[Hydration] Hydrate');

export const hydrateSuccess = createAction(
  '[Hydration] Hydrate Success',
  props<{ state: fromRoot.AppState }>()
);

export const hydrateFailure = createAction('[Hydration] Hydrate Failure');
