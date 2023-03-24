import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartService } from '../../../services';

import { Property } from '../../../models';

import { AppState } from '../../../../store/app.state';

import { getPropertyList } from '../state/property.selectors';

import { GetPropertyItems } from '../state/property.actions';

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
