import { Component, OnInit } from '@angular/core';
import {Product} from './../../../product.model';
import {CartService} from './../../../core/service/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  product$: Observable<Product[]>;
  constructor(
    private cartService: CartService
  ) {
    this.product$ = this.cartService.cart$; // ya es un observavle y no se necesita susbcripcion, solo si se queire manipular data
    // continuamente esta escuchando y agregando a la lista produt que es un observable
  }

  ngOnInit() {
  }

}
