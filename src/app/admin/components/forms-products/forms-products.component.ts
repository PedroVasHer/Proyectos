import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
// FormGroup: se tiene varios grupos de variables, varios emails, varios titulos, etc
// FormBuilder: sirve para crear el grupo rapidamente
import {ProductsService} from './../../../core/service/products/products.service';
import {Router} from '@angular/router';
import {finalize} from 'rxjs/operators';
import {AngularFireStorage} from '@angular/fire/storage';
import {MyValidators} from './../../../utils/validation';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-forms-products',
  templateUrl: './forms-products.component.html',
  styleUrls: ['./forms-products.component.scss']
})
export class FormsProductsComponent implements OnInit {

  form: FormGroup;
  image$: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
  ) {
    this.buildForm(); // por ser una construccion y no datos se pone en el contructor
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault(); // evita que la pagina se recargue cuando se guarda, eso es un comporttamiento que hace por defecto
    // esta instruccion hace que omita esto y haga su accion
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
      .subscribe(newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products']); // permite direccionar a otra ruta que se le especifique,
        // en este caso la lista de productos
      });
    }
    // console.log(this.form.value);
  }

  upLoadFile(event) {
    const file = event.target.files[0]; // este file tiene el nombre y muchas caracteristicas de la imagen
    const dir = `/images/${file.name}`;
    const fileRef = this.angularFireStorage.ref(dir);
    const task = this.angularFireStorage.upload(dir, file);

    task.snapshotChanges() // esta tarea es una observable por lo tanto esto indica cuando termino de cargar la imagen
    .pipe(
      finalize(() => {
        this.image$ = fileRef.getDownloadURL();
        this.image$.subscribe(url => {
          console.log(url);
          this.form.get('image').setValue(url);
        });
      })  // se obtiene la url que se puede utilizar
    )
    .subscribe(); // se debe suscribir para que se procese
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
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
