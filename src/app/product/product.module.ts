import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './components/products/products.component';
import {ProductsDetailComponent} from './components/products-detail/products-detail.component';
import {ProductRoutingModule} from './product-routing.module';
import {ProductComponent} from './components/product/product.component';
import {SharedModule} from './../shared/shared.module';
import {MaterialModule} from './../material/material.module'; // con esto se puede usar los elementos
// de material module, que en este caso seria el boton.

@NgModule({
    declarations: [
        ProductsComponent,
        ProductsDetailComponent,
        ProductComponent
    ],
    imports: [
        ProductRoutingModule,
        SharedModule,
        MaterialModule,
        CommonModule
    ]
})

export class ProductModule {

}
