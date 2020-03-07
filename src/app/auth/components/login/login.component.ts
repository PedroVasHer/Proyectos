import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from './../../../core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin']);
      })
      .catch(() => { // en caso de que algo falle se le muestra un error al usuario
        alert('Usuario no valido');
      });
    }
    event.preventDefault();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
