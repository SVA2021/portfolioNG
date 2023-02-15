import {Injectable} from '@angular/core';
import {contactItem, titleT} from "../interfaces/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  title: titleT
  contacts: contactItem[]
  svgIconSrc: string

  constructor() {
    this.title = {
      en: 'contacts',
      ru: 'контакты',
    };
    this.contacts = [
      {
        type: 'telegram',
        data: 'SVA_1985',
        href: 'https://t.me/SVA_1985'
      },
      {
        type: 'discord',
        data: 'Vitaliy S.',
        href: 'https://discordapp.com/users/842765911681400894'
      },
      {
        type: 'github',
        data: 'SVA2021',
        href: 'https://github.com/SVA2021'
      },
      {
        type: 'viber',
        data: '+79966236425',
        href: 'viber://chat?number=%2B79966236425'
      },
      {
        type: 'phone',
        data: '+79966236425',
        href: 'tel:+79966236425'
      },
      {
        type: 'email',
        data: 'sofronov.vit@gmail.com',
        href: 'mailto:sofronov.vit@gmail.com'
      },
    ];
    this.svgIconSrc = 'assets/social.svg';
  }
}
