import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Property } from '../models';

import { environment } from '../../enviroments/enviromet';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private readonly url = environment.apiFakeProducts;

  constructor(private httpClient: HttpClient) {}

  getAllProperties() {
    return this.httpClient.get<Property[]>(this.url).pipe(
      tap((_) => console.log('fetched props')),
      catchError(this.handleError<Property[]>('getAllProducts', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
