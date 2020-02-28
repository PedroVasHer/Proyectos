import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductsDetailComponent} from './product/components/products-detail/products-detail.component';
import {LayoutComponent} from './layout/layout.component';
import {AdminGuard} from './admin.guard';

const routes: Routes = [
  {
    path : '',
    component: LayoutComponent,
    children: [
      {
        path : '',
        redirectTo: '/home', // va a home cando no tiene path
        pathMatch: 'full', // cuando la pagina este en blanco o sin path, solo la url
      },
      {
        path: 'home',
        // component: HomeComponent
        // La idea no es cargar un componente sino un modulo.
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)// esto carga un modulo dinamincamente
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        component: ContactComponent
      }
    ]
    },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**', // cuando no hace match con nada, cuando el usaurio se equivoca en el path
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
