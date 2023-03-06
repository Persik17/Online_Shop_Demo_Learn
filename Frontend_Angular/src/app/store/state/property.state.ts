import { Property } from 'src/app/models/property.model';

export interface PropertyState {
  property: Property[];
  selectedProperty: Property;
}

export const initialPropertyState: PropertyState = {
  property: null,
  selectedProperty: null,
};
