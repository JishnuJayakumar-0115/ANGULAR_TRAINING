import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://localhost:44373/api/products';

  http = inject(HttpClient);

  // GET
  // getAll(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.apiUrl);
  // }

  getAll(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  // GET BY ID
  getById(id: number): Observable<Product> {
    return this.http
      .get<Product>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  // POST
  create(product: Product): Observable<Product> {
    return this.http
      .post<Product>(this.apiUrl, product)
      .pipe(catchError(this.handleError));
  }

  // PUT
  update(id: number, product: Product): Observable<Product> {
    return this.http
      .put<Product>(`${this.apiUrl}/${id}`, product)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  delete(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  handleError(error: any) {
    console.error('Error:', error);
    return throwError(() => error);
  }
}
