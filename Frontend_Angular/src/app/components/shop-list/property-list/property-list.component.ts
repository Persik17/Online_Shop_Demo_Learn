import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartService } from '../../../services';

import { Property } from '../../../models';

import { AppState } from 'src/app/store/state/app.state';

import { getPropertyList } from 'src/app/store/selectors/property.selectors';

import { GetPropertyItems } from '../../../store/actions/property.actions';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  props$: Observable<Property[]> = this.store.pipe(select(getPropertyList));

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) {}

  addToCart(prop: Property): void {
    if (!prop) {
      return;
    }

    this.cartService.addToCart(prop);
  }

  ngOnInit() {
    this.store.dispatch(new GetPropertyItems());
  }
}
