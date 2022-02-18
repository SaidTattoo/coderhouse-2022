import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  endpointProductos:string = 'http://localhost:8080/api/productos'; 
  endpointCarrito:string = 'http://localhost:8080/api/carrito';
  constructor(private http: HttpClient) { }
  

  getProductsCarrito(id:any) {
    return this.http.get(`${this.endpointCarrito}/${id}/productos`);
  }
}
