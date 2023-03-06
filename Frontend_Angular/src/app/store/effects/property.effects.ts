import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom, catchError } from 'rxjs/operators';

import { AppState } from '../state/app.state';

import {
  PropertyEnumActions,
  GetPropertySuccess,
  GetPropertyItems,
} from '../actions/property.actions';

import { PropertyService } from '../../services/property.service';

import { selectPropertyList } from '../selectors/property.selectors';

import { Property } from 'src/app/models/property.model';

@Injectable()
export class PropertyEffects {
  getAttendees$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PropertyEnumActions.GetPropertyItems),
      switchMap((action: GetPropertyItems) =>
        this._propertyService
          .getAllProps()
          .pipe(map((props: Property[]) => new GetPropertySuccess(props)))
      )
    )
  );

  constructor(
    private _propertyService: PropertyService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
