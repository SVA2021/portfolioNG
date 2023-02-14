import {Injectable} from '@angular/core';
import {aboutPageT,} from "../interfaces/about";

const bioFullEng = `Hello. My name is Vitaliy, and I'm a self-taught Front-End Developer.
       I like the process of turning an idea into a real thing, detail, device.
       This is the reason why I previously worked as a technologist (process engineer) for 10 years.
       I constantly strive to understand something new in technics and not only.
       Now I want to learn more about the structure of one of the most used technologies in the world
       in the 21st century - the Internet.`;

const bioFullRu = `Привет. Меня зовут Виталий и я Front-end разработчик-самоучка.
Мне нравится процесс превращения идеи в реальную вещь, деталь, устройство.
По этой причине я до этого 10 лет работал технологом.
Я постоянно стремлюсь понять что-то новое в технике и не только.
Теперь я хочу больше узнать об устройстве одной из самых используемых технологий в мире в 21 веке -
Интернет.`;

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  get common(): aboutPageT {
    return this._common;
  }

  get certificateImgSrc(): string {
    return this._certificateImgSrc;
  }

  get svgIconSrc(): string {
    return this._svgIconSrc;
  }

  get mySkills(): string[] {
    return this._mySkills;
  }

  private readonly _mySkills: string[]
  private readonly _svgIconSrc: string
  private readonly _certificateImgSrc: string

  private readonly _common: aboutPageT

  constructor() {

    this._mySkills = [
      'html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'react', 'redux', 'sass', 'typescript',
    ];
    this._svgIconSrc = 'assets/skills.svg';
    this._certificateImgSrc = 'assets/certificates_combo_1800.png';

    this._common = {
      en: {
        title: {
          title: 'About me',
          bio: 'biography',
          skill: 'skills',
          gh: 'GitHub stats',
          certificate: 'certificates',
        },
        bioFull: bioFullEng,
        stats: {
          href: 'https://github.com/SVA2021',
          imgSrc: 'https://github-readme-stats.vercel.app/api?username=SVA2021&show_icons=true&include_all_commits=true&theme=dark&hide=issues&hide_border=true',
          imgAlt: 'GitHub main stats',
        },
        mostUsed: {
          href: 'https://github.com/SVA2021',
          imgSrc: 'https://github-readme-stats.vercel.app/api/top-langs/?username=SVA2021&count_private=true&include_all_commits=true&theme=dark&layout=compact&hide_border=true',
          imgAlt: 'GitHub most used languages stats',
        },
        certificateTip: 'see all in new window',
        certificateImgAlt: 'certificates',
      },
      ru: {
        title: {
          title: 'Обо мне',
          bio: 'биография',
          skill: 'навыки',
          gh: 'GitHub статистика',
          certificate: 'сертификаты',
        },
        bioFull: bioFullRu,
        stats: {
          href: 'https://github.com/SVA2021',
          imgSrc: 'https://github-readme-stats.vercel.app/api?username=SVA2021&show_icons=true&include_all_commits=true&theme=dark&hide=issues&hide_border=true&locale=ru',
          imgAlt: 'GitHub основные данные',
        },
        mostUsed: {
          href: 'https://github.com/SVA2021',
          imgSrc: 'https://github-readme-stats.vercel.app/api/top-langs/?username=SVA2021&count_private=true&include_all_commits=true&theme=dark&layout=compact&hide_border=true&locale=ru',
          imgAlt: 'GitHub топ используемых языков',
        },
        certificateTip: 'смотреть все',
        certificateImgAlt: 'сертификаты',
      }
    }

  }
}
