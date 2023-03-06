import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AppState } from './store/state/app.state';

import { selectPropertyList } from './store/selectors/property.selectors';

import { GetPropertyItems } from './store/actions/property.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Frontend_Angular';

  config$ = this._store.pipe(select(selectPropertyList));

  constructor(private _store: Store<AppState>) {}

  ngOnInit() {
    this._store.dispatch(new GetPropertyItems());
  }
}
