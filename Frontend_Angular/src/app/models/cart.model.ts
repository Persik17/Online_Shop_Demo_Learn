import { Property } from './property.model';

export interface Cart {
  id: number;
  item: Property;
  count: number;
}
