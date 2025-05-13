
const API_URL = 'https://fakestoreapi.com/products'; // url de l'API

export class ProductService {
  private http = inject(HttpClient);

  // méthode qui récupère tous les produits
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL);
  }

  // methode qui récupère un seul produit
  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/${id}`);
  }
}
