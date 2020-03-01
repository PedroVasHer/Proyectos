import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from '../../../product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
   // this.products = this.productsService.getAllProducts();
   this.fetchProduct(); // onInit es la mejor manera de llamar metodos
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id);
  }

  fetchProduct() {
    this.productsService.getAllProducts()
    .subscribe(products => { // el metodo subscribe es el que trae los metodos porque el servicio es un observable 
      this.products = products;
    });
  }
}
