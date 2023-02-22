import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

import { Property } from '../../model/Property';


@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  properties: Property[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
  }
}
