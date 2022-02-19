import { FormControl } from '@angular/forms';
import { CarritoService } from './../../../carrito/service/carrito.service';
import { DashboardService } from './../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idCarro: any = sessionStorage.getItem('idCarro') || '0';
  constructor(private _dashboard: DashboardService, private _carrito: CarritoService) { }
  productos: any;
  ngOnInit(): void {
    this.getProductos()
  }

  getProductos() {
    this._dashboard.getProducts().subscribe((data: any) => {
      this.productos = data.data;
    });
  }

  addToCart(item: any) {
    if (this.idCarro == '0') {
      this._dashboard.obtainCart().subscribe((data: any) => {
        sessionStorage.setItem('idCarro', data.carrito)
        this.idCarro = data.carrito
        const {stock, ...itemSinStock} = item
        this._dashboard.addToCart(this.idCarro, itemSinStock).subscribe((data: any) => {
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Producto creado con exito',
            showConfirmButton: false,
            timer: 1500
          })
          this.getProductos()
        })
      })
    } else { 
      const {stock, ...itemSinStock} = item
      this._dashboard.addToCart(this.idCarro, itemSinStock).subscribe((data: any) => {
        swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Producto creado con exito',
          showConfirmButton: false,
          timer: 1500
        })
        this.getProductos()
      })
    }
  }
}
