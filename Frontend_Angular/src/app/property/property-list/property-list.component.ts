import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';
import { CardService } from 'src/app/service/card.service';

import { Property } from '../../model/Property';
import { Basket } from '../../model/Basket';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[];
  sum: number = 0;

  constructor(private productService: ProductService, private cardService: CardService) {}

  getProducts(): void {
    this.productService
      .getAllProducts()
      .subscribe((data) => (this.properties = data));
  }

  ngOnInit(): void {
    this.getProducts();
  }
}
