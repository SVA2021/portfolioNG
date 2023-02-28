import {Injectable} from '@angular/core';
import {LoginBtnLangT, LoginTextLangT} from "../interfaces/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  buttons: LoginBtnLangT
  text: LoginTextLangT

  constructor() {
    this.buttons = {
      en: {
        login: 'Login with Google',
        logout: 'Logout',
        goto: 'Go to Admin',
      },
      ru: {
        login: 'Войти с Google',
        logout: 'Выйти',
        goto: 'В Админку',
      }
    };
    this.text = {
      en: {
        title: 'Authentication',
        welcome: 'Welcome',
        description: 'Here you can login to manage your projects page data',
        admin: 'You auth as admin so you can manage your data by click button below',
        guest: 'You auth as a guest and can not manage anything here',
        login: 'Please login',
      },
      ru: {
        title: 'Авторизация',
        welcome: 'Добро пожаловать',
        description: 'здесь можно авторизоваться, чтобы управлять данными для страницы проектов',
        admin: 'Вы вошли как администратор, для управления данными нажмите кнопку внизу',
        guest: 'Вы вошли как гость и не можете управлять здесь',
        login: 'Пожалуйста авторизуйтесь',
      },
    };
  }
}
