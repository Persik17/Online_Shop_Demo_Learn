import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

import { AppState } from '../state/app.state';

import {
  PropertyEnumActions,
  GetPropertySuccess,
  GetPropertyFail,
} from '../actions/property.actions';

import { PropertyService } from '../../services';

import { Property } from '../../models';

@Injectable()
export class PropertyEffects {
  getProperties$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PropertyEnumActions.GetPropertyItems),
      switchMap(() =>
        this._propertyService.getAllProps().pipe(
          map((props: Property[]) => new GetPropertySuccess(props)),
          catchError((error) => of(new GetPropertyFail(error)))
        )
      )
    )
  );

  constructor(
    private _propertyService: PropertyService,
    private _actions$: Actions,
    private _store: Store<AppState>
  ) {}
}
