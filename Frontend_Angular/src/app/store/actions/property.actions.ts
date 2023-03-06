import { Action } from '@ngrx/store';

import { Property } from '../../models/property.model';

export enum PropertyEnumActions {
  GetPropertyItems = '[Property] Get Property Items',
  GetPropertySuccess = '[Property] Get Property Success',
}

export class GetPropertyItems implements Action {
  public readonly type = PropertyEnumActions.GetPropertyItems;
}

export class GetPropertySuccess implements Action {
  public readonly type = PropertyEnumActions.GetPropertySuccess;
  constructor(public payload: Property[]) {}
}

export type PropertyActions = GetPropertyItems | GetPropertySuccess;
