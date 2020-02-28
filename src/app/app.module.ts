import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // Para hacer el enlace de datos

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module';
import {DemoComponent} from './demo/demo.component';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ContactComponent,
    PageNotFoundComponent,
    LayoutComponent // se debe incluir para que angular reconozca el componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule // se debe adicionar para que tengas una consecuencia
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
