import {Injectable} from '@angular/core';
import {
  projectLangTitlesT,
  pageLangTitlesT,
} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  pageTitles: pageLangTitlesT
  projectTitles: projectLangTitlesT
  svgIconSrc: string

  constructor() {
    this.svgIconSrc = 'assets/skills.svg';
    this.pageTitles = {
      en: {
        title: 'projects',
        actual: 'actual projects',
        future: 'future projects',
      },
      ru: {
        title: 'проекты',
        actual: 'готовые проекты',
        future: 'будущие проекты',
      }
    };
    this.projectTitles = {
      en: {
        why: 'Why?',
        technologies: 'Technologies',
        newSkills: 'New skills',
        additional: 'Additional info',
      },
      ru: {
        why: 'Почему?',
        technologies: 'Технологии',
        newSkills: 'Новые навыки',
        additional: 'Дополнительно',
      }
    };
  }
}
