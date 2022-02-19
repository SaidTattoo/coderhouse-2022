import { ModalAgregarProductoComponent } from './../modal-agregar-producto/modal-agregar-producto.component';

import { AdminService } from './../../service/admin.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productos: any;

  ids = 0
  disableBtn: boolean = false;
  constructor(private _admin: AdminService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.productList()
  }

  productList() {
    console.log('editado')
    this._admin.productList().subscribe((data: any) => {
      this.productos = data.data
    })
  }
  deleteProduct(id: number) {
    swal.fire({
      title: 'Estas seguro?',
      text: "No podras revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._admin.deleteProduct(id).subscribe((data: any) => {
          this.productList()
        })
      }
    })

  }
  editProduct(id: number) {
    const dialogRef = this.dialog.open(ModalAgregarProductoComponent, {
      width: '250px',
      data: { addOrEdit: 'edit', id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._admin.editProduct(id, result).subscribe((data: any) => {
          this.productList()
        })
      }
    });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalAgregarProductoComponent, {
      width: '250px',
      data: { addOrEdit: 'save' },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._admin.createProduct(result).subscribe((data: any) => {
          swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
          this.productList()
        })
      };
    })
}
}
