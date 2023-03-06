import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './cart-total.component.html',
  styleUrls: ['./cart-total.component.css'],
})
export class CartTotalComponent {
  @Input() sum: Observable<number>;
}
