import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../models/category.interface';
import { Product } from '../models/product.interface';
const apiPath: string = 'http://localhost:3000/api/';
const headers = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8'
});

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${apiPath}category`, {headers});
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${apiPath}product`, {headers});
  }

  public getProductDetails(productId: number): Observable<Product> {
    return this.http.get<Product>(`${apiPath}product/${productId}`, {headers});
  }
}
