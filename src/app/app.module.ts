import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // Para hacer el enlace de datos
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import {SharedModule} from './shared/shared.module';
import {DemoComponent} from './demo/demo.component';
import {CoreModule} from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import {environment} from './../environments/environment';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ContactComponent,
    PageNotFoundComponent,
    LayoutComponent, // se debe incluir para que angular reconozca el componente
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, // se debe adicionar para que tengas una consecuencia
    HttpClientModule, // con esto la apliucaciones tiene la facilidad de hacer peticiones http
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
