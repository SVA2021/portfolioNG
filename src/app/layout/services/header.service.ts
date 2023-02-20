import {Injectable} from '@angular/core';
import {HeaderLogo, HeaderMenu,} from "../interfaces/header";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  get cvLink(): HeaderLogo {
    return this._cvLink;
  }

  get menuLinks(): HeaderMenu {
    return this._menuLinks;
  }

  get logo(): HeaderLogo {
    return this._logo;
  }

  private readonly _logo: HeaderLogo;
  private readonly _menuLinks: HeaderMenu;
  private readonly _cvLink: HeaderLogo;

  constructor() {
    this._logo = {
      en: 'sva',
      ru: 'сва',
    };
    this._cvLink = {
      en: 'https://drive.google.com/file/d/1a14g9IZpSjA9U7FNQoCyCOvh9lXYIZG3/view?usp=share_link',
      ru: 'https://drive.google.com/file/d/1RkNFo8uZNtudeQkN1aJgxPAnHhmauUKb/view?usp=share_link',
    }
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
