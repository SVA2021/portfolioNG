import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, Subscription} from 'rxjs';
import {AuthService} from "./services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  adminEmail = 'sofronov.vit@gmail.com'
  user$: Subscription
  isAdmin: boolean

  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.isAdmin = false;
    this.user$ = this.auth.user.subscribe(user => this.isAdmin = user.email === this.adminEmail);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLogged()) {
      if (!this.isAdmin) this.router.navigate(['/',]);
      return this.isAdmin;
    } else {
      this.router.navigate(['login',]);
      return false;
    }
  }

}
