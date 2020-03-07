import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private angularFireAuth: AngularFireAuth
  ) { }

  createUser(email: string, ps: string) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, ps);
    // retorna una promesa
  }

  login(email: string, ps: string) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, ps);
  }

  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  hasUser() { // va a preguntar si hay un usuario logeado
    // this.angularFireAuth.authState
    // .subscribe(user => {
    //    console.log(user==null)
    // });
    return this.angularFireAuth.authState;
  }
}
