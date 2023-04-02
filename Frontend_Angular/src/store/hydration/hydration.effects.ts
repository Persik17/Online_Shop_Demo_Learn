import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';

import { LocalStorageService } from '../../app/services/local-storage.service';

import * as HydrationActions from './hydration.actions';

import * as fromRoot from '../app.state';

@Injectable()
export class HydrationEffects implements OnInitEffects {
  hydrate$ = createEffect(() =>
    this.action$.pipe(
      ofType(HydrationActions.hydrate),
      map(() => {
        const storageValue = this.localStorageService.get('state');
        if (storageValue) {
          try {
            const state = JSON.parse(storageValue);
            return HydrationActions.hydrateSuccess({ state });
          } catch {
            this.localStorageService.delete('state');
          }
        }
        return HydrationActions.hydrateFailure();
      })
    )
  );

  serialize$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(
          HydrationActions.hydrateSuccess,
          HydrationActions.hydrateFailure
        ),
        switchMap(() => this.store),
        distinctUntilChanged(),
        tap((state) =>
          this.localStorageService.set('state', JSON.stringify(state))
        )
      ),
    { dispatch: false }
  );

  constructor(
    private action$: Actions,
    private store: Store<fromRoot.AppState>,
    private localStorageService: LocalStorageService
  ) {}

  ngrxOnInitEffects(): Action {
    return HydrationActions.hydrate();
  }
}
