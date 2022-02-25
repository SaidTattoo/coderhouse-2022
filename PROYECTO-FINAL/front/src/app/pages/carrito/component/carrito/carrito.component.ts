import { CarritoService } from './../../service/carrito.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private _carrito: CarritoService) { }
  idCarrito = sessionStorage.getItem('idCarro') || '0';
  carrito: any;
  total: any = 0;
  disabled = true
  ngOnInit(): void {
    this.carritoProductos()
  }

  carritoProductos() {
    this._carrito.getProductsCarrito(this.idCarrito).subscribe((data: any) => {
      console.log(data)
      this.carrito = data.carro[0].productos
      if(this.carrito.length > 0){
        this.disabled = false
        
      }else{
        this.disabled = true
      }
      this.carrito.forEach((element: any) => {
        this.total = parseInt(this.total) + parseInt(element.price);
      })
      })
  }

  deleteProduct(idProd: any, id:any) {
    console.log(idProd)
    swal.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._carrito.deleteProduct(this.idCarrito, idProd, id).subscribe((data: any) => {
          this.carrito.forEach((element: any) => {
            console.log(element)
            this.total = parseInt(this.total) - parseInt(element.price);
          })
          this.carritoProductos()
        })
      }
    })
  }

  deleteCarrito() {
    swal.fire({
      title: '¿Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.disabled = true
        sessionStorage.setItem('carritoCount', '0')
        this._carrito.deleteCarrito(this.idCarrito).subscribe((data: any) => {
          sessionStorage.setItem('idCarro', '0')
          this.idCarrito = '0'
          this.carrito = null
          this.total = 0
        })
      }
    })


  }
}
