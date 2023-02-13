import {Component, OnDestroy, OnInit,} from '@angular/core';
import {MenuItemI} from "../../interfaces/header";
import {HeaderService} from "../../services/header.service";
import {langT} from "../../interfaces/lang";
import {LangService} from "../../services/lang.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  nameArray: string []
  menuLinks: MenuItemI[]
  activeLang: langT

  constructor(
    public header: HeaderService,
    public lang: LangService,
  ) {
    this.activeLang = 'en';
    this.nameArray = this.header.logo[this.activeLang].split('') ?? [];
    this.menuLinks = this.header.menuLinks[this.activeLang] ?? [];
  }

  ngOnInit(): void {
    this.lang.activeLang$.subscribe(lang => {
      this.activeLang = lang;
      this.nameArray = this.header.logo[lang].split('');
      this.menuLinks = this.header.menuLinks[lang];
    });
  }

  toggleLang() {
    let newLang: langT = this.activeLang === 'en' ? 'ru' : 'en';
    this.lang.toggleLang(newLang);
  }

  ngOnDestroy(): void {
    this.lang.activeLang$.unsubscribe();
  }

}
