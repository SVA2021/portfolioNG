import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";
import {LoginBtnT, LoginTextT} from "../../interfaces/login";
import {LangService} from "../../layout/services/lang.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  adminEmail = 'sofronov.vit@gmail.com'
  userName: string
  userEmail: string
  user$: Subscription
  isAdmin: boolean
  isLogged: boolean
  buttons: LoginBtnT
  text: LoginTextT
  myLang$: Subscription

  constructor(
    public auth: AuthService,
    public router: Router,
    public lang: LangService,
    public loginData: LoginService,
  ) {
    this.userName = 'Guest';
    this.userEmail = '';
    this.user$ = Subscription.EMPTY;
    this.myLang$ = Subscription.EMPTY;
    this.isAdmin = false;
    this.isLogged = false;
    this.buttons = this.loginData.buttons[this.lang.lastLang];
    this.text = this.loginData.text[this.lang.lastLang];
  }

  ngOnInit(): void {
    this.user$ = this.auth.user.subscribe(user => {
      if (user) {
        this.userName = user.displayName;
        this.userEmail = user.email;
        this.isAdmin = this.userEmail === this.adminEmail;
        this.isLogged = true;
      } else {
        this.userName = 'Guest';
        this.userEmail = '';
        this.isAdmin = false;
        this.isLogged = false;
      }
    });
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.buttons = this.loginData.buttons[lang];
      this.text = this.loginData.text[lang];
    })
  }

  login() {
    this.auth.login()
  }

  logout() {
    this.auth.logout()
  }

  goToAdminPanel() {
    this.router.navigate(['admin']);
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
    this.myLang$.unsubscribe();
  }
}
