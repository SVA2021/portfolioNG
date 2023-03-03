import { Injectable } from '@angular/core';
import {baseLangT} from "../../layout/interfaces/lang";

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmService {

  title: baseLangT
  yes: baseLangT
  no: baseLangT

  constructor() {
    this.title = {
      en: 'Are you sure?',
      ru: 'Вы уверены?',
    };
    this.yes = {
      en: 'Yes',
      ru: 'Да',
    };
    this.no = {
      en: 'No',
      ru: 'Нет',
    };
  }

}
