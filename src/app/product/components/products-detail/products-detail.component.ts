import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductsService} from '../../../core/service/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.scss']
})
export class ProductsDetailComponent implements OnInit {
  product: Product; // se debe hacer para que el template lo reconozca

  constructor(
    private route: ActivatedRoute, // como es de inyeccion de dependiencias
    private productsService: ProductsService
  ) { }

  ngOnInit() { // manera adecuada de recibir datos
    this.route.params.subscribe((params: Params) => { // esto permite capturar el id de la ruta
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });
  }

}
