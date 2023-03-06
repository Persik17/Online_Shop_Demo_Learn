import { PropertyEnumActions } from '../actions/property.actions';
import { PropertyActions } from '../actions/property.actions';

import { initialPropertyState, PropertyState } from '../state/property.state';

export const propertyReducers = (
  state = initialPropertyState,
  action: PropertyActions
): PropertyState => {
  switch (action.type) {
    case PropertyEnumActions.GetPropertySuccess: {
      return {
        ...state,
        property: action.payload,
      };
    }

    default:
      return state;
  }
};
