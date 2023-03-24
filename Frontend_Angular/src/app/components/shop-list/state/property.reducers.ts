import { PropertyEnumActions, PropertyActions } from './property.actions';

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
        error: null,
      };
    }

    case PropertyEnumActions.GetPropertyFail: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case PropertyEnumActions.GetPropertyItems: {
      return {
        ...state,
        error: null,
      };
    }

    default:
      return state;
  }
};
