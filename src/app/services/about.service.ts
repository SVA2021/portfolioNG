import {Injectable} from '@angular/core';
import {ghStatsItemI} from "../interfaces/about";

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  get ghMostUsed(): ghStatsItemI {
    return this._ghMostUsed;
  }

  get certificateImgAlt(): string {
    return this._certificateImgAlt;
  }

  get certificateImgSrc(): string {
    return this._certificateImgSrc;
  }

  get certificateTip(): string {
    return this._certificateTip;
  }

  get certificateTitle(): string {
    return this._certificateTitle;
  }

  get ghStats(): ghStatsItemI {
    return this._ghStats;
  }

  get ghTitle(): string {
    return this._ghTitle;
  }

  get svgIconSrc(): string {
    return this._svgIconSrc;
  }

  get mySkills(): string[] {
    return this._mySkills;
  }

  get skillTitle(): string {
    return this._skillTitle;
  }

  get bioFull(): string {
    return this._bioFull;
  }

  get title(): string {
    return this._title;
  }

  get bioTitle(): string {
    return this._bioTitle;
  }

  private readonly _title: string
  private readonly _bioTitle: string
  private readonly _bioFull: string
  private readonly _skillTitle: string
  private readonly _mySkills: string[]
  private readonly _svgIconSrc: string
  private readonly _ghTitle: string
  private readonly _ghStats: ghStatsItemI
  private readonly _ghMostUsed: ghStatsItemI
  private readonly _certificateTitle: string
  private readonly _certificateTip: string
  private readonly _certificateImgSrc: string
  private readonly _certificateImgAlt: string

  constructor() {
    this._title = 'About me';
    this._bioTitle = 'biography';
    this._bioFull = `Hello. My name is Vitaliy, and I'm a self-taught Front-End Developer.\n
       I like the process of turning an idea into a real thing, detail, device.
       This is the reason why I previously worked as a technologist (process engineer) for 10 years.
       I constantly strive to understand something new in technics and not only.
       Now I want to learn more about the structure of one of the most used technologies in the world
       in the 21st century - the Internet.`;
    this._skillTitle = 'skills';
    this._mySkills = [
      'html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'react', 'redux', 'sass', 'typescript',
    ];
    this._svgIconSrc = 'assets/skills.svg';
    this._ghTitle = 'GitHub stats';
    this._ghStats = {
      href: 'https://github.com/SVA2021',
      imgSrc: 'https://github-readme-stats.vercel.app/api?username=SVA2021&show_icons=true&include_all_commits=true&theme=dark&hide=issues&hide_border=true',
      imgAlt: 'GitHub main stats',
    };
    this._ghMostUsed = {
      href: 'https://github.com/SVA2021',
      imgSrc: 'https://github-readme-stats.vercel.app/api/top-langs/?username=SVA2021&count_private=true&include_all_commits=true&theme=dark&layout=compact&hide_border=true',
      imgAlt: 'GitHub most used languages stats',
    };
    this._certificateTitle = 'certificates';
    this._certificateTip = 'see all in new window';
    this._certificateImgSrc = 'assets/certificates_combo_1800.png';
    this._certificateImgAlt = '';

  }
}
