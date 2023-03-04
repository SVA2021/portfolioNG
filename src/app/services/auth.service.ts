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
  userName: string
  userEmail: string

  constructor(public auth: AngularFireAuth) {
    this.user = this.auth.user;
    this.userName = '';
    this.userEmail = '';
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => {
        this.userName = res.user?.displayName ?? '';
        this.userEmail = res.user?.email ?? '';
      })
      .catch(e => {
        console.log(e);
        this.userName = '';
        this.userEmail = '';
      })
  }

  logout() {
    this.auth.signOut()
      .finally(() => {
        this.userName = '';
        this.userEmail = '';
      });
    this.user = this.auth.user;
  }

  isLogged() {
    return !!this.auth.user;
  }

  isAdmin() {
    return this.userEmail === this.adminEmail
  }

}
