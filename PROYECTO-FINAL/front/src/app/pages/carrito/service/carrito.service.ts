import { HttpClient } from '@angular/common/http';
import { REFERENCE_PREFIX } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // endpointProductos:string = 'http://localhost:8080/api/productos'; 
  // endpointCarrito:string = 'http://localhost:8080/api/carrito';
  
  endpointProductos:string = 'https://zippy-necessary-lodge.glitch.me/api/productos'; 
  endpointCarrito:string = 'https://zippy-necessary-lodge.glitch.me/api/carrito';
  constructor(private http: HttpClient) { }
  


  getProductsCarrito(id:any) {
    return this.http.get(`${this.endpointCarrito}/${id}/productos`);
  }
  deleteProduct(idCart:any, idProd:any, id:any ){
    return this.http.delete(`${this.endpointCarrito}/${idCart}/productos/${idProd}?id=${id}`);
  }
  deleteCarrito(id:any){
    return this.http.delete(`${this.endpointCarrito}/${id}`);
  }
}
