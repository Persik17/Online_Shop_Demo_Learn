import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';
import { CartService } from 'src/app/service/cart.service';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Property[];
  sum: number = 0;

  constructor(private productService: ProductService, private cartService: CartService) {}

  getShopItems(): void {
    this.productService
      .getAllProps()
      .subscribe((data) => (this.properties = data));
  }

  addToCart(prop: Property): void {
    //this.cartService.addToCard(prop);
    console.log(prop);
  }

  ngOnInit(): void {
    this.getShopItems();
  }
}
