import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Property } from '../model/Property';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Property[]> {
    return this.http.get<Property[]>(this.productUrl)
    .pipe(
      tap(_ => console.log('fetched props')),
      catchError(this.handleError<Property[]>('getAllProducts', []))
    );;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
