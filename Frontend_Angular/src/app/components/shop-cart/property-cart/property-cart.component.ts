import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CartService } from 'src/app/services/cart.service';

import { GetCart } from 'src/app/store/actions/cart.actions';

import { AppState } from 'src/app/store/state/app.state';

import { Cart } from '../../../models';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css'],
})
export class PropertyCartComponent implements OnInit {
  cart$: Observable<Cart[]> = this.cartService.getCart();
  carTotal$: Observable<number> = this.cartService.getCartTotal();

  constructor(
    private cartService: CartService,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.store.dispatch(new GetCart());
  }

  addToCart(cartProp: Cart) {
    this.cartService.addToCart(cartProp.item);
  }

  deleteFromCart(cartProp: Cart) {
    this.cartService.deleteFromCart(cartProp);
  }
}
