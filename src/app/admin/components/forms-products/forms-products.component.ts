import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';
// FormGroup: se tiene varios grupos de variables, varios emails, varios titulos, etc
// FormBuilder: sirve para crear el grupo rapidamente
@Component({
  selector: 'app-forms-products',
  templateUrl: './forms-products.component.html',
  styleUrls: ['./forms-products.component.scss']
})
export class FormsProductsComponent implements OnInit {
  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm(); // por ser una construccion y no datos se pone en el contructor
  }

  ngOnInit() {
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: [''],
      description: ['', [Validators.required]]
    });
  }
}
