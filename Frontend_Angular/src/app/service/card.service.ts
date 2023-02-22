import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';
import { Basket } from '../model/Basket';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  basket: Basket = {
    cardItems: [
      {
        id: 1,
        title: '123',
        price: 50,
        description: 'dwqer3cqre',
        category: 'dwefv',
        image: '',
        rating: {
          rate: 12,
          count: 5,
        },
      },
      {
        id: 2,
        title: 'Title',
        price: 50,
        description: 'BBQ',
        category: 'super',
        image: '',
        rating: {
          rate: 11,
          count: 1,
        },
      },
      {
        id: 3,
        title: 'vvQ',
        price: 50,
        description: 'zzzzz sleep',
        category: 'noncategory',
        image: '',
        rating: {
          rate: 9,
          count: 90,
        },
      },
    ],
  };

  constructor() {}

  addToCard(prop: Property): void {
    this.basket.cardItems.push(prop);
  }

  getBasketCount() {
    return this.basket.cardItems.length;
  }

  getBasketSum() {
    return this.basket.cardItems.reduce((sum, current) => sum + current.price, 0)
  }

  getBasketItems() {
    return this.basket.cardItems;
  }
}
