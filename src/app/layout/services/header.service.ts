import {Injectable} from '@angular/core';
import {HeaderLogo, HeaderMenu,} from "../interfaces/header";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  get menuLinks(): HeaderMenu {
    return this._menuLinks;
  }

  get logo(): HeaderLogo {
    return this._logo;
  }

  private readonly _logo: HeaderLogo;
  private readonly _menuLinks: HeaderMenu;

  constructor() {
    this._logo = {
      en: 'sva',
      ru: 'сва',
    };
    this._menuLinks = {
      en: [
        {href: '/', title: 'home',},
        {href: '/projects', title: 'projects',},
        {href: '/about', title: 'about me',},
        {href: '/contacts', title: 'contacts',},
      ],
      ru: [
        {href: '/', title: 'начало',},
        {href: '/projects', title: 'проекты',},
        {href: '/about', title: 'обо мне',},
        {href: '/contacts', title: 'контакты',},
      ],
    }
  }
}
