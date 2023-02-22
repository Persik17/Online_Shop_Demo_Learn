import { Component, Input } from '@angular/core';

import { Property } from '../../model/Property';

@Component({
  selector: 'app-property-shop-item',
  templateUrl: './property-shop-item.component.html',
  styleUrls: ['./property-shop-item.component.css'],
})
export class PropertyShopItemComponent {
  @Input() property: Property;

  onAddedToCard(addedProperty: Property): void {
    this.property = addedProperty;
    console.log(this.property);
  }
}
