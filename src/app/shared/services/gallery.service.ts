import {Injectable} from '@angular/core';
import {imgAltT, navButtonsLangT} from "../../interfaces/gallery";

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  navButtons: navButtonsLangT
  imgAlt: imgAltT

  constructor() {
    this.navButtons = {
      en: {
        prev: 'prev',
        fullscreen: 'fullscreen',
        slideshow: 'slideshow',
        next: 'next',
      },
      ru: {
        prev: 'сюда',
        fullscreen: 'полный экран',
        slideshow: 'слайдшоу',
        next: 'туда',
      },
    };
    this.imgAlt = {
      en: 'project additional screenshot',
      ru: 'дополнительный скриншот проекта',
    }
  }
}
