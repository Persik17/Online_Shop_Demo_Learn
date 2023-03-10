import { createSelector } from '@ngrx/store';

import { AppState } from '../state/app.state';
import { PropertyState } from '../state/property.state';

const selectProperty = (state: AppState) => state.prop;

export const selectPropertyList = createSelector(
  selectProperty,
  (state: PropertyState) => state.property
);
