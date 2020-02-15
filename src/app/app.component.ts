import { Component } from '@angular/core';
import { CompileShallowModuleMetadata } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  /*SE PUEDE MANDAR SOLO LA PALABRA template y mandarle el html que contenga como string si solo es una linea
  se esta manera se ahorra la creacion de un archivo
  template: '<router-outlet></router-outlet>'
  */
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



}
