import {Injectable} from '@angular/core';
import {HomeLinkI} from "../interfaces/home";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  get profession(): string {
    return this._profession;
  }

  get fullName(): string[] {
    return this._fullName;
  }

  get HomeLinks(): HomeLinkI[] {
    return this._HomeLinks;
  }

  private readonly _HomeLinks: HomeLinkI[]
  private readonly _fullName: string[];
  private readonly _profession: string;

  constructor() {
    this._HomeLinks = [
      {
        src: 'assets/social.svg',
        id: 'telegram',
        href: 'https://t.me/SVA_1985',
      },
      {
        src: 'assets/social.svg',
        id: 'discord',
        href: 'https://discordapp.com/users/842765911681400894',
      },
      {
        src: 'assets/social.svg',
        id: 'github',
        href: 'https://github.com/SVA2021',
      },
      {
        src: 'assets/social.svg',
        id: 'hh',
        href: 'https://hh.ru/applicant/resumes/view?resume=e30eb6d2ff0983faee0039ed1f62784758716e',
      },
    ]
    this._fullName = ['sofronov', 'vitaliy', 'alexandrovich'];
    this._profession = 'FrontEnd Developer';
  }
}
