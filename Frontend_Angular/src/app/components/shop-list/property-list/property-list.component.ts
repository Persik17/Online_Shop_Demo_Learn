import { Component } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';

import { Property } from '../../../models/property.model';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: Property[];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  getShopItems(): void {
    this.productService
      .getAllProps()
      .subscribe((data) => (this.properties = data));
  }

  addToCart(prop: Property): void {
    this.cartService.addToCart(prop);
    console.log(prop);
  }

  ngOnInit(): void {
    this.getShopItems();
  }
}
