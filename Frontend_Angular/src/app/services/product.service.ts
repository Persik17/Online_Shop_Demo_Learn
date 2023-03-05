import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Property } from '../models/property.model';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpService) {}

  getAllProps(): Observable<Property[]> {
    return this.http.getAllProperties();
  }
}
