import { createSelector } from '@ngrx/store';

import { AppState } from '../../../../store/app.state';
import { PropertyState } from '../state/property.state';

const selectProperty = (state: AppState) => state.prop;

export const getPropertyList = createSelector(
  selectProperty,
  (state: PropertyState) => state.property
);
