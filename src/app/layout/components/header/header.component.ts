import {Component, OnDestroy, OnInit,} from '@angular/core';
import {MenuItemI} from "../../interfaces/header";
import {HeaderService} from "../../services/header.service";
import {langT} from "../../interfaces/lang";
import {LangService} from "../../services/lang.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isMenuVisible: boolean
  nameArray: string []
  menuLinks: MenuItemI[]
  activeLang: langT
  myLang$: Subscription
  cvLink: string

  constructor(
    public header: HeaderService,
    public lang: LangService,
    public router: Router,
  ) {
    this.isMenuVisible = false;
    this.myLang$ = Subscription.EMPTY;
    this.activeLang = this.lang.lastLang === 'en' ? 'ru' : 'en';
    this.nameArray = this.header.logo[this.lang.lastLang].split('') ?? [];
    this.menuLinks = this.header.menuLinks[this.lang.lastLang] ?? [];
    this.cvLink = this.header.cvLink[this.lang.lastLang];
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.activeLang = lang === 'en' ? 'ru' : 'en';
      this.nameArray = this.header.logo[lang].split('');
      this.menuLinks = this.header.menuLinks[lang];
      this.cvLink = this.header.cvLink[lang];
    });
  }

  toggleLang() {
    this.lang.toggleLang();
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

  toggleModalMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

}
