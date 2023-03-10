import { Injectable } from '@angular/core';

import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  constructor(private http: HttpService) {}

  getAllProps() {
    return this.http.getAllProperties();
  }
}
