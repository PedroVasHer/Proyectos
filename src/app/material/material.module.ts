import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// aqui se ponen todos los modulos y componentes que va a usar material
// y se este modulo material se pone en los modulos que se requiera con export

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatButtonModule
  ]
})
export class MaterialModule { }
