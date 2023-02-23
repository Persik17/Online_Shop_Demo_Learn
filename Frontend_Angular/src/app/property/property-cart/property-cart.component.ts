import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/service/cart.service';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css'],
})
export class PropertyCartComponent implements OnInit {
  cartProperties: Property[];
  sum: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getSum();
    this.getCartItems();
  }

  getSum() {
    this.sum = this.cartService.getCartSum();
  }

  getCartItems() {
    this.cartProperties = this.cartService.getCartItems();
  }
}
