import { Property } from '../../models';

export interface PropertyState {
  property: Property[];
  selectedProperty: Property;
  error: any;
}

export const initialPropertyState: PropertyState = {
  property: null,
  selectedProperty: null,
  error: null,
};
