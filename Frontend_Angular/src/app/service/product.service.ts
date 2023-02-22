import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Property } from '../model/Property';
import { HttpService } from '../service/http.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpService) {}

  getAllProducts(): Observable<Property[]> {
    return this.http.getAllProducts();
  }
}
