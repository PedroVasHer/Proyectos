import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FormsProductsComponent } from './components/forms-products/forms-products.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
 // import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';
// Schematic agrega estas importaciones de manera automatrica pero como se creo un archivo de material-module
// se debe pasar a este archivo.


@NgModule({
  declarations: [ProductFormComponent, NavComponent, TableComponent, DashboardComponent, ProductsListComponent, FormsProductsComponent, ProductEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AdminModule { }
