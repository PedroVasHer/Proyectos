import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  OnDestroy
    } from '@angular/core';
// los decoradores le dicen a l componente que va a ser, si un servicio
// si un componente, etc. Estos se nombran @y el nombre del decorador antes de la clase
import { Product } from '../product.model';
@Component({
    selector : 'app-product', // hace referencia al nombre que tendra y como se llamara en el codigo html principal
    templateUrl: './product.component.html', // hace referencia al codigo html que tendra
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, OnDestroy {
    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); // la salida emite cualquier valor al componente padre
    today = new Date();
    // tener en cuenta que se debe inicializar eventEmitter

    constructor() {
      console.log('1. Constructor'); // llamaria 6 veces al contructor porque hay 6 elementos
    }

    ngOnChanges(change: SimpleChanges) { // para llamar este metodo se necesita de una interfaz llama onChange
      console.log('2. ngOnChange');
      console.log(change); // muestra valores previos y valores actuales
    }

    ngOnInit() {
      console.log('3. ngOninit');
    }

    ngOnDestroy() {
      console.log('4. ngOnDestroy');
    }
    addCar() {
      console.log('Añadir al carrito');
      this.productClicked.emit(this.product.id);
    }
}
