import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/service/cart.service';

import { Property } from '../../model/Property';
import { Cart } from 'src/app/model/Cart';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css'],
})
export class PropertyCartComponent implements OnInit {
  cartProperties: Cart[] = [];
  sum: Observable<number>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart.subscribe((items) => {
      this.cartProperties = items;
    });

    this.sum = this.cartService.getCartSum();
  }
}
