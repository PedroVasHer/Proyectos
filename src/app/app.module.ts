import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // Para hacer el enlace de datos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent} from './components/product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent // se debe incluir para que angular reconozca el componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // se debe adicionar para que tengas una consecuencia
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
