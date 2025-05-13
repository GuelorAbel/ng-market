import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';

// url de l'API
const API_URL = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  // injection du module HttpClient
  private http = inject(HttpClient);

  // méthode qui récupère tous les produits
  getProducts() {
    return this.http.get<Product[]>(API_URL);
  }

  // méthode qui récupère un produit par son id
  getProduct(prodId: number) {
    return this.http.get<Product>(`${API_URL}/${prodId}`);
  }


}
