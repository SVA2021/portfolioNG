import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
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

  constructor() {
    this._title = 'About me';
    this._bioTitle = 'biography';
    this._bioFull = `Hello. My name is Vitaliy, and I'm a self-taught Front-End Developer.<br>
        I like the process of turning an idea into a real thing, detail, device.<br>
        This is the reason why I previously worked as a technologist (process engineer) for 10
        years.<br>
        I constantly strive to understand something new in technics and not only.
        Now I want to learn more about the structure of one of the most used technologies in the world
        in the 21st
        century - the Internet.`;
    this._skillTitle = 'skills';
    this._mySkills = [
      'html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',
    ];
    this._svgIconSrc = 'src/assets/skills.svg';

  }
}
