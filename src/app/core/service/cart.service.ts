import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs'; // lo que facilita la programacion reactiva
import {Product} from './../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]); // se crea la instancia del carrito que recibe los
  // productos, inicia con vacio.
  cart$ = this.cart.asObservable(); // cart$ facilita que cualquier componente pueda ver esta variable

  constructor() { }

  addCart(product: Product) {
    this.products = [...this.products, product]; // ...this.products crea una nueva instancia de productos y no se modifica
    // asi no se hace referencia al mismo array
    this.cart.next(this.products); // esto le dice a todos los componentes que hubo un cambio y poder verlo
  }

}
