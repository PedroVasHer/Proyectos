import { Component, OnInit } from '@angular/core';
import {CartService} from './../../../core/service/cart.service';
import {map} from 'rxjs/operators'; // map transforma los datos
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // total = 0; tambien se puede hacer que sea un observable para que sea mas eficiente
  total$: Observable<number>;
  constructor(
    private cartService: CartService
    ) {
      // this.cartService.cart$.subscribe(products => { // escucha cada vez que se agrega algo al carrito
      //   console.log(products);
      //   this.total = products.length;
      // });

      // this.cartService.cart$
      // .pipe (
      //   map(products => products.length) // transforma el datos del tamaño del producto y lo agrega a total
      // )
      // .subscribe(total => { // escucha cada vez que se agrega algo al carrito
      //   this.total = total;
      //   });

      this.total$ = this.cartService.cart$
      .pipe (
        map(products => products.length) // transforma el datos del tamaño del producto y lo agrega a total
      ); // y ya no es necesario suscribirse, se susbcribe desde el template
    }

  ngOnInit() {
  }

}
