import { Component, Input } from '@angular/core';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-cart-item',
  templateUrl: './property-cart-item.component.html',
  styleUrls: ['./property-cart-item.component.css'],
})
export class PropertyCartItemComponent {
  @Input() property: Property;
}
