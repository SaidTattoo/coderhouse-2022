import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // endpointProductos:string = 'http://localhost:8080/api/productos'; 
  // endpointCarrito:string = 'http://localhost:8080/api/carrito';
  
  endpointProductos:string = 'https://zippy-necessary-lodge.glitch.me/api/productos'; 
  endpointCarrito:string = 'https://zippy-necessary-lodge.glitch.me/api/carrito';
  constructor(private http: HttpClient) { }

  public getProducts() {
    console.log(`${this.endpointProductos}`)
    return this.http.get(`${this.endpointProductos}`);
  }
  public addToCart( id:number, producto:any ){
   return this.http.post(`${this.endpointCarrito}/${id}/productos`, producto );
  }
  public obtainCart(){
    return this.http.get(`${this.endpointCarrito}`);
  }
} 
