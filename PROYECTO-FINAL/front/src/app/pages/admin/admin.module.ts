import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './component/admin/admin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import { ModalAgregarProductoComponent } from './component/modal-agregar-producto/modal-agregar-producto.component';
import {MatDialogModule} from '@angular/material/dialog'; 
@NgModule({
  declarations: [
    AdminComponent,
    ModalAgregarProductoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule
  ]
})
export class AdminModule { }
