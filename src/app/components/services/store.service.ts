import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/components/models/product.model'



@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://fakestoreapi.com/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(productId: number): Observable<Product> {
    const url = `${this.apiUrl}/${productId}`;
    return this.http.get<Product>(url);
  }

  getAllCategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      `${this.apiUrl}/categories`
    );
  }
  getProductsByCategory(category: string): Observable<Product[]> {
    const url = `${this.apiUrl}/category/${category}`;
    return this.http.get<Product[]>(url);
  }
}