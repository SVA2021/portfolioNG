import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  adminEmail = 'sofronov.vit@gmail.com'
  user: Observable<any>

  constructor(public auth: AngularFireAuth) {
    this.user = this.auth.user;
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.user = this.auth.user;
  }

  isLogged() {
    return !!this.auth.user;
  }

  // isAdmin() {
  //   return this.auth.user.subscribe(user => user?.email === this.adminEmail)
  // }

}
