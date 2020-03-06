import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
// FormGroup: se tiene varios grupos de variables, varios emails, varios titulos, etc
// FormBuilder: sirve para crear el grupo rapidamente
import {ProductsService} from './../../../core/service/products/products.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {MyValidators} from './../../../utils/validation';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm(); // por ser una construccion y no datos se pone en el contructor
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).
      subscribe(product => {
        this.form.patchValue(product); // se rellena el formulario con el producto que se le manda del
      });
    });
  }

  saveProduct(event: Event) {
    event.preventDefault(); // evita que la pagina se recargue cuando se guarda, eso es un comporttamiento que hace por defecto
    // esta instruccion hace que omita esto y haga su accion
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.updateProduct (this.id, product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']); // permite direccionar a otra ruta que se le especifique,
        // en este caso la lista de productos
      });
    }
    // console.log(this.form.value);
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      // id: ['', [Validators.required]], como se esta actualizando no se necesita que se cambie el id, solo el resto de los items
      title: ['', [Validators.required]],
      price: [, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }

  get priceField() { // Esto permite llamar una variable y no tener que repetir form.get('price')
  // esto es buena practica para no cambiar en todo el html la variable.
    return this.form.get('price');
  }

}
