import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // endpointProductos:string = 'http://localhost:8080/api/productos'; 
  // endpointCarrito:string = 'http://localhost:8080/api/carrito';
  
  endpointProductos:string = 'https://zippy-necessary-lodge.glitch.me/api/productos'; 
  endpointCarrito:string = 'https://zippy-necessary-lodge.glitch.me/api/carrito';
  constructor(private http: HttpClient) { }

  createProduct(producto:any){
   return this.http.post(this.endpointProductos, producto)
  }
  productList(){
    return this.http.get(this.endpointProductos);
  }
  deleteProduct(id:any){
    return this.http.delete(`${this.endpointProductos}/${id}`);
  }
  editProduct(id:any, producto:any){
    return this.http.put(`${this.endpointProductos}/${id}`, producto)
  }
  getProduct(id:any){
    return this.http.get(`${this.endpointProductos}/${id}`);
  }
}
