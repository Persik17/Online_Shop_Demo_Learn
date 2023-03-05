import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

import { Observable, of, pipe, map } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  count$ = this.cartService.getCartCount();

}
