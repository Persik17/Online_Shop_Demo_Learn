import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  countProduct: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.getCountInCart();
  }

  getCountInCart(): void {
    this.countProduct = this.cartService.getCartCount();
  }
}
