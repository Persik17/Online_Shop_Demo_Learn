import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';

import { Cart } from 'src/app/models/cart.model';
import { Property } from 'src/app/models/property.model';

@Component({
  selector: 'app-property-cart',
  templateUrl: './property-cart.component.html',
  styleUrls: ['./property-cart.component.css'],
})
export class PropertyCartComponent implements OnInit {
  cartProperties: Cart[] = [];

  constructor(private cartService: CartService) {}

  sum$ = this.cartService.getCartSum();

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items) => {
      this.cartProperties = items;
    });
  }

  addToCart(prop: Property): void {
    this.cartService.addToCart(prop);
  }

  deleteFromCart(prop: Property) {
    this.cartService.deleteFromCart(prop);
  }
}
