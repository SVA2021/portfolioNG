import {Component, OnDestroy, OnInit,} from '@angular/core';
import {MenuItemI} from "../../interfaces/header";
import {HeaderService} from "../../services/header.service";
import {langT} from "../../interfaces/lang";
import {LangService} from "../../services/lang.service";
import {Subscription} from "rxjs";

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

  constructor(
    public header: HeaderService,
    public lang: LangService,
  ) {
    this.isMenuVisible = false;
    this.myLang$ = Subscription.EMPTY;
    this.activeLang = this.lang.lastLang;
    this.nameArray = this.header.logo[this.activeLang].split('') ?? [];
    this.menuLinks = this.header.menuLinks[this.activeLang] ?? [];
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.activeLang = lang;
      this.nameArray = this.header.logo[lang].split('');
      this.menuLinks = this.header.menuLinks[lang];
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

}
