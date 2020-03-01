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
      this.fetchProduct(id);
      // this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    });
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo producto creado de angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto creado.'
    };
    this.productsService.createProduct (newProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 6666,
      description: 'Edicion producto.'
    };
    this.productsService.updateProduct ('5', updateProduct)
    .subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct() {
    this.productsService.deteleProduct ('18')
    .subscribe(respose => {
      console.log(respose);
    });
  }

}
