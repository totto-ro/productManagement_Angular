import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  fetchAllProducts() {
    return this._http.get('http://localhost:7077/pro/');
  }
  getOneProduct(id: string){
    return this._http.get(`http://localhost:7077/pro/${id}`);
  }
  
  createProduct(newProduct: any) {
      return this._http.post('http://localhost:7077/pro/', newProduct);
  }

  updateProduct(id : string, editProduct : any){
    return this._http.put(`http://localhost:7077/pro/${id}`, editProduct);
  }

  deleteProduct(id : string){
    return this._http.delete(`http://localhost:7077/pro/${id}`);
  }

}
