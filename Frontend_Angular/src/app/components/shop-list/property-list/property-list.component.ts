import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { CartService } from 'src/app/services/cart.service';

import { Property } from '../../../models/property.model';

import { AppState } from 'src/app/store/state/app.state';

import { selectPropertyList } from 'src/app/store/selectors/property.selectors';

import { GetPropertyItems } from '../../../store/actions/property.actions';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) {}

  props$ = this.store.pipe(select(selectPropertyList));

  addToCart(prop: Property): void {
    this.cartService.addToCart(prop);
    console.log(prop);
  }

  ngOnInit() {
    this.store.dispatch(new GetPropertyItems());
  }
}
