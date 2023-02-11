import {Injectable} from '@angular/core';
import {MenuItemI} from "../interfaces/header";

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  get menuLinks(): MenuItemI[] {
    return this._menuLinks;
  }

  get logo(): string[] {
    return this._logo;
  }

  private readonly _logo: string[];
  private readonly _menuLinks: MenuItemI[];

  constructor() {
    this._logo = 'sva'.split('');
    this._menuLinks = [
      {href: '/', title: 'home',},
      {href: '/projects', title: 'projects',},
      {href: '/about', title: 'about me',},
      {href: '/contacts', title: 'contacts',},
    ];
  }
}
