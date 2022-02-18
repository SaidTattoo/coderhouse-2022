import { DashboardService } from './../../service/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idCarro: any = sessionStorage.getItem('idCarro') || '0';

  constructor(private _dashboard: DashboardService) { }
  productos: any;
  ngOnInit(): void {
    console.log('a mimir ',sessionStorage.getItem('idCarro'))
    this._dashboard.getProducts().subscribe((data: any) => {
      this.productos = data.data;
      console.log({ data });
    });
  }
  addToCart(item: any) {
    console.log(item)
    if (this.idCarro == '0') {
      this._dashboard.obtainCart().subscribe((data: any) => {
        sessionStorage.setItem('idCarro', data.carrito)
        this.idCarro =  data.carrito
        this._dashboard.addToCart(this.idCarro, item).subscribe((data: any) => {
          console.log(data);
        })
      })
    } else {
      this._dashboard.addToCart(this.idCarro, item).subscribe((data: any) => {
        console.log(data);
      })
    }
  }
}
