import { CarritoService } from './../../service/carrito.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private _carrito :CarritoService) { }
  idCarrito = sessionStorage.getItem('idCarro') || '0';
  carrito: any;
  total: any = 0;
  ngOnInit(): void {
    this._carrito.getProductsCarrito(parseInt(this.idCarrito)).subscribe((data: any) => {
      this.carrito = data.carro[0].productos
      this.carrito.forEach((element:any) => {
        console.log(element)
        this.total = parseInt(this.total) + parseInt(element.price);
      })
    })
  }


   

}
