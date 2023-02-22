import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/service/product.service';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Property[];
  sum: number = 0;

  constructor(private productService: ProductService) {}

  getHeroes(): void {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.properties = data;
        console.log(data);
      },
      error: (e) => {
        console.log('http error!');
        console.log(e);
      },
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  /* getSum() {
    for(let i = 0; i < this.properties.length; i++) {
      this.sum = +this.properties[i].Price;
    }
    console.log(this.sum);
    return this.sum;
  } */
}
