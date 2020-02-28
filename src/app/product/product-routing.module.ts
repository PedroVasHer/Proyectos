import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductsComponent} from './components/products/products.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';

const routes: Routes = [
    {
      path: '',
      component: ProductsComponent
    },
    {
      path: ':id',
      component: ProductsDetailComponent
    }
  ];

@NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ]
  })
export class ProductRoutingModule {}
