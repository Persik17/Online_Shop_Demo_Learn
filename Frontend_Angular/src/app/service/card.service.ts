import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  addToCard(prop: Property): Observable<Property> {
    return null;
  }
}
