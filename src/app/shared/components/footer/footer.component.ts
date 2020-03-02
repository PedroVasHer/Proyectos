import { Component, OnInit } from '@angular/core';
import {FormControl, Validator, Validators} from '@angular/forms'; // para el formulario reactivo
// validator valida parametros que se le pase al input, como maximo de caracteres, minimo, etc

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  emailField: FormControl;
  constructor() {// El contructor contruye instancias de algo
    this.emailField = new FormControl('', [ // '' manda una inicializacion del input
      Validators.required,
      Validators.email
    ]);
    // de esta manera se escuchan los datos
    // this.emailField.valueChanges
    // .subscribe(values => {
    //   console.log(values);
    // });
   }

  ngOnInit() {
  }

  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }
}
