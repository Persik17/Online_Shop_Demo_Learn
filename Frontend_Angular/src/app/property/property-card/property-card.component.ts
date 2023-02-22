import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { CardService } from 'src/app/service/card.service';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent implements OnInit {
  cardProperties: Property[];
  sum: number = 0;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getSum();
  }

  getSum() {
    this.sum = this.cardService.getBasketSum();
  }
}
