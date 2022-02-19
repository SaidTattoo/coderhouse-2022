import { AdminService } from './../../service/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modal-agregar-producto',
  templateUrl: './modal-agregar-producto.component.html',
  styleUrls: ['./modal-agregar-producto.component.css']
})
export class ModalAgregarProductoComponent implements OnInit {

  //regex validate number positive
  regexValidateNumberPositive = /^[0-9]*$/;

  constructor(private _admin: AdminService, public dialogRef: MatDialogRef<ModalAgregarProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
    profileForm = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      thumbnail: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      stock: new FormControl('', [Validators.required, Validators.pattern(this.regexValidateNumberPositive)]),
      date: new FormControl(new Date()),
    });
  disableBtn: boolean = false;
  editOrSave = 'save'

  ngOnInit(): void {
    this.editOrSave = this.data.addOrEdit
    if(this.editOrSave ==='edit'){
      console.log(this.data)
      this._admin.getProduct(this.data.id).subscribe((data: any) => {
        console.log(data.data.id)
        this.profileForm = new FormGroup({
          title: new FormControl(data.data.title, Validators.required),
          price: new FormControl(data.data.price, Validators.required),
          thumbnail: new FormControl(data.data.thumbnail, Validators.required),
          stock: new FormControl(data.data.stock, [Validators.required, Validators.pattern(this.regexValidateNumberPositive)]),
          descripcion: new FormControl(data.data.descripcion, [Validators.required,Validators.pattern(this.regexValidateNumberPositive)]),
          date: new FormControl(new Date()),
        });
      })
    }
    console.log(this.data)
    this.profileForm.valueChanges.subscribe((changedObj: any) => {
      this.disableBtn = this.profileForm.valid;
    });
  }

 
  
  onNoClick(): void {
    this.dialogRef.close();
  }
}
