import { Injectable } from '@angular/core';
import { Product } from '../../../product.model';
import {HttpClient} from '@angular/common/http';
import {environment} from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  /*products: Product[] = [ // de esta manera se asocia el modelo o la interfaz al array de producto
    {
      id: '1',
      image: 'assets/images/camiseta.png',
      title: 'Camiseta',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '2',
      image: 'assets/images/hoodie.png',
      title: 'Hoodie',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '3',
      image: 'assets/images/mug.png',
      title: 'Mug',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '4',
      image: 'assets/images/pin.png',
      title: 'Pin',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '5',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    },
    {
      id: '6',
      image: 'assets/images/stickers2.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    }
  ];*/

  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get<Product[]>(environment.url_api);
    // <Product[]> resuelve el error de tipado, ya que la respuesta devolvia un observable de tipo objeto
    // y products es una lista de tipo productos
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${environment.url_api}/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(environment.url_api, product); // post recibe una url y el cuerpo del post
  }

  updateProduct(id: string, changes: Partial<Product>) { // Partial<Product>: envia solo algunos cambios
    return this.http.put(`${environment.url_api}/${id}`, changes);
  }

  deteleProduct(id: string) {
    return this.http.delete(`${environment.url_api}/${id}`);
  }
}
