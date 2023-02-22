import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';
import { Basket } from '../model/Basket';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  basket: Basket;

  constructor() {}

  addToCard(prop: Property): void {
    this.basket.cardItems.push(prop);
  }

  getBasketCount() {
    return this.basket.cardItems.length;
  }
}
