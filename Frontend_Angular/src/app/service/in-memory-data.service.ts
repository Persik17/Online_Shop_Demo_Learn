import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  constructor() {}

  createDb() {
    const prop = [
      { id: 50, name: 'Dr. Nice' },
      { id: 51, name: 'Bombasto' },
      { id: 52, name: 'Celeritas' },
      { id: 53, name: 'Magneta' },
      { id: 54, name: 'RubberMan' },
      { id: 55, name: 'Dynama' },
      { id: 56, name: 'Dr. IQ' },
      { id: 57, name: 'Magma' },
      { id: 58, name: 'Tornado' }
    ];
    return {prop};
  }

  genId(prop: Property[]): number {
    return prop.length > 0 ? Math.max(...prop.map(prop => prop.id)) + 1 : 11;
  }
}
