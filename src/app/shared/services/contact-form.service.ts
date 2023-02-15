import {Injectable} from '@angular/core';
import {contactForm} from "../components/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  contactForm: contactForm

  constructor() {
    this.contactForm = {
      en: {
        fields: {
          name: 'name',
          email: 'email',
          message: 'message',
          submit: 'send',
        },
        warnings: {
          email: 'put correct email',
          minLength: 'min length 3 symbols',
          maxLength: 'max length 240 symbols',

        },
      },
      ru: {
        fields: {
          name: 'имя',
          email: 'е-мейл',
          message: 'сообщение',
          submit: 'отправить',
        },
        warnings: {
          email: 'введите корректный email',
          minLength: 'минимум 3 символа',
          maxLength: 'максимум 240 символов',
        },
      }
    }
  }
}
