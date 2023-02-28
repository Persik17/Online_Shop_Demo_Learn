import { Pipe, PipeTransform } from '@angular/core';

import { Observable, Observer, of, map } from 'rxjs';

import { CartService } from '../service/cart.service';

@Pipe({
  name: 'cartItemsCount',
})
export class CountCartPipe implements PipeTransform {
  transform(count: number) {
    return 0;
  }
}
