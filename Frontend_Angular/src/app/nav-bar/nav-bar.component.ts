import { Component, Input, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  countProduct: number;

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.getCountInBasket();
  }

  getCountInBasket(): void {
    this.countProduct = this.cardService.getBasketCount();
    console.log("Count in basket");
    console.log(this.countProduct);
  }
}
