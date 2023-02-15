import {Injectable} from '@angular/core';
import {certificatesPageT, galleryItemT} from "../interfaces/certificates";

@Injectable({
  providedIn: 'root'
})
export class CertificatesService {

  gbPlaceholderImg: string = 'https://ik.imagekit.io/sva/certificates/gb/gb_base_300.png'
  titles: certificatesPageT
  gb: galleryItemT[]
  sl: galleryItemT[]
  w3s: galleryItemT[]
  learnJS: galleryItemT[]

  constructor() {
    this.titles = {
      en: {
        title: 'certificates',
        gbTip: 'see on geekbrains',
        slTip: 'see on sololearn',
      },
      ru: {
        title: 'сертификаты',
        gbTip: 'смотреть на geekbrains',
        slTip: 'смотреть на sololearn',
      }
    };
    this.gb = [
      {
        href: 'https://gb.ru/certificates/1761564',
        caption: `HTML&CSS<br>Advanced level`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1399063',
        caption: `HTML&CSS<br>Interactive course`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1172067',
        caption: `JavaScript.<br>Beginner level`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1054705',
        caption: `Getting Started with JavaScript`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1001572',
        caption: `Intensive Software Testing`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/995787',
        caption: `Programming basics<br>Beginner`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1348639',
        caption: `Basics of JavaScript programming`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
      {
        href: 'https://gb.ru/certificates/1399037',
        caption: `English language.<br>Pre-intermediate`,
        imgAlt: 'geekbrains Certificate',
        imgSrc: this.gbPlaceholderImg,
      },
    ];
    this.sl = [
      {
        href: 'https://www.sololearn.com/Certificate/1014-20193310/jpg/',
        caption: `HTML`,
        imgAlt: 'sololearn HTML Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1014-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/Certificate/1023-20193310/jpg/',
        caption: `CSS`,
        imgAlt: 'sololearn CSS Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1023-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/certificates/course/en/20193310/1024/landscape/png',
        caption: `JavaScript`,
        imgAlt: 'sololearn JavaScript Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-20193310-1024.png',
      },
      {
        href: 'https://www.sololearn.com/Certificate/1162-20193310/jpg/',
        caption: `Responsive Web Design`,
        imgAlt: 'sololearn Responsive Web Design Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1162-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/Certificate/1097-20193310/jpg/',
        caption: `React + Redux`,
        imgAlt: 'sololearn React + Redux Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1097-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/Certificate/1082-20193310/jpg/',
        caption: `jQuery`,
        imgAlt: 'sololearn jQuery Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1082-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/Certificate/1059-20193310/jpg/',
        caption: `PHP`,
        imgAlt: 'sololearn PHP Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-1059-20193310.png',
      },
      {
        href: 'https://www.sololearn.com/certificates/course/en/20193310/1060/landscape/png',
        caption: `SQL`,
        imgAlt: 'sololearn SQL Certificate',
        imgSrc: 'https://ik.imagekit.io/sva/certificates/sl/cert-20193310-1060.png',
      },
    ];
    this.w3s = [
      {
        href: '',
        caption: `w3schools total stats`,
        imgAlt: `w3schools total stats`,
        imgSrc: 'https://ik.imagekit.io/sva/certificates/other/w3schools_base_stats_1200.png',
      },
      {
        href: '',
        caption: `w3schools completed skills`,
        imgAlt: `w3schools completed skills`,
        imgSrc: 'https://ik.imagekit.io/sva/certificates/other/w3schools_skills_completed_1200.png',
      },
    ];
    this.learnJS = [
      {
        href: '',
        caption: `learn.javascript stats`,
        imgAlt: `learn.javascript stats`,
        imgSrc: 'https://ik.imagekit.io/sva/certificates/other/learnjavascript_1200.png',
      },
    ];
  }
}
