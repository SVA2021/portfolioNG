import {Injectable} from '@angular/core';
import {projectLangTitlesT, pageLangTitlesT, futureProjectsLangT, actualProjectsLangT} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  pageTitles: pageLangTitlesT
  projectTitles: projectLangTitlesT
  futureProjects: futureProjectsLangT
  actualProjects: actualProjectsLangT
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
    this.futureProjects = {
      en: [
        {
          name: 'book catalog',
          description: 'catalog of some facts about books',
          why: `In this project, I want to take as much as possible as a basis
            source code from the "movie catalog" project. After that, add to this MobX and GraphQL
            (client) to start studying of these technologies. Books can be replaced with something else
            (depending on the presence of an open GraphQL API).`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['GraphQL', 'MobX',],
        },
        {
          name: 'English Lessons',
          description: 'landing page of a teacher (or school) for learning English',
          why: `In this project, I want to fix knowledge about analytics, maps, animations,
          global variables of CSS, theme switchers.`,
          technologies: ['HTML5', 'CSS3', 'JS', 'SASS', 'Git', 'GitHub', 'GitHub.Pages', 'BEM'],
          newSkills: ['Gulp (if I find an excuse)',],
        },
        {
          name: 'Repair Service',
          description: 'landing page of repair service of something (like fridge and washing machine)',
          why: `In this project, I want to fix knowledge from "English lessons" project and try to maximum code reusage`,
          technologies: ['HTML5', 'CSS3', 'JS', 'SASS', 'Git', 'GitHub', 'GitHub.Pages', 'BEM'],
          newSkills: ['Gulp (if I find an excuse)',],
        },
        {
          name: 'Online Shop',
          description: 'shop of some specific or mostly used goods',
          why: `I plan to continue React library learning. Especially SSR (Server Side Rendering) based on NextJS`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['NextJS',],
        },
        {
          name: 'Realty Agency',
          description: 'real estate agency of a network of new buildings',
          why: `In this project, I want to take as much as possible as a basis source code from the "online shop" project`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['NextJS',],
        },
      ],
      ru: [
        {
          name: 'book catalog',
          description: 'каталог информации о разных книгах',
          why: `В этом проекте я хочу взять за основу как можно больше исходных данных из проекта "movie catalogue".
          и добавить к этому изучение основ MobX и GraphQL(client).
          Книги могут быть заменены на что-то другое (зависит от наличия открытого GraphQL API)`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['GraphQL', 'MobX',],
        },
        {
          name: 'English Lessons',
          description: 'лендинг учителя (или школы) по изучению английского языка',
          why: `В этом проекте я хочу закрепить работу с аналитикой, картами, анимациями,
          глобальными переменными CSS, переключателями тем`,
          technologies: ['HTML5', 'CSS3', 'JS', 'SASS', 'Git', 'GitHub', 'GitHub.Pages', 'BEM'],
          newSkills: ['Gulp (если найду этому оправдание)',],
        },
        {
          name: 'Repair Service',
          description: 'лендинг ремонтного сервиса (например холодильников и стиральных машин)',
          why: `В этом проекте я хочу максимально переиспользовать код и знания из проекта "English lessons"`,
          technologies: ['HTML5', 'CSS3', 'JS', 'SASS', 'Git', 'GitHub', 'GitHub.Pages', 'BEM'],
          newSkills: ['Gulp (если найду этому оправдание)',],
        },
        {
          name: 'Online Shop',
          description: 'онлайн магазин по продаже особенных или наоборот широко распространенных товаров',
          why: `В этом проекте я продолжу изучение React и начну изучать SSR (Server Side Rendering) на основе NextJS`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['NextJS',],
        },
        {
          name: 'Realty Agency',
          description: 'агентство недвижимости сети новостроек',
          why: `В этом проекте я хочу взять за основу как можно больше исходных данных из проекта "online shop"`,
          technologies: ['React', 'React-Test', 'Material UI', 'Typescript', 'SASS', 'CSSmodules', 'Git', 'GitHub',],
          newSkills: ['NextJS',],
        },
      ],
    };
    this.actualProjects = {
      en: [
        {
          name: 'moviefinder',
          description: `project is SPA (Single Page Application), which connected to custom unoffiicial "KinoPoisk"
          Backend API. At this moment implemented: top lists, detail info by ID, search by keyword and other params.`,
          why: `Target is to continue learning React library in combine with other libraries like Material UI,
          Swiper, Axios, React-hook-form and Unit Testing.`,
          technologies: ['React', 'Axios', 'Redux,', 'Redux-Toolkit', 'Redux-Thunk', 'Typescript', 'StyledComponents',
            'Git', 'GitHub', 'Vercel(deploy)',],
          additional: `Some features that i want to implement was not realized by BackEnd limitations.
          UI/ UX designed by me.`,
          gallery: [
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0_720.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1_720.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0_360.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1_360.png',
          ],
          skills: ['html5', 'git', 'markdown', 'typescript', 'react', 'redux',],
          links: [
            {
              href: 'https://github.com/SVA2021/movie_finder',
              title: 'code',
            },
            {
              href: 'https://www.figma.com/file/2YCro2tcWisnVciAZou1Ps/MOVIE_FINDER?node-id=24%3A482',
              title: 'Figma',
            },
            {
              href: 'https://movie-finder-sva2021.vercel.app/',
              title: 'www',
            },
          ],
        },

      ],
      ru: [
        {
          name: 'moviefinder',
          description: `проект это SPA (Single Page Application), подключенное к неофициальному Backend
          серверу-клону "КиноПоиска" На данный момент реализованы: топ-листы, детальное инфо по ID,
          поиск по ключевым словам и параметрам`,
          why: `Цель продолжить изучение React в комбинации с такими библиотеками как Material UI, Swiper, Axios,
          React-hook-form а также Unit тестирование`,
          technologies: ['React', 'Axios', 'Redux,', 'Redux-Toolkit', 'Redux-Thunk', 'Typescript', 'StyledComponents',
            'Git', 'GitHub', 'Vercel(deploy)',],
          additional: `Не все исходные возможности были реализованы, частично из-за ограничений BackEnd.
          Дизайн UX/ UI разработан мной.`,
          gallery: [
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0_720.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1_720.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_0_360.png',
            'https://ik.imagekit.io/sva/projects/moviefinder/moviefinder_1_360.png',
          ],
          skills: ['html5', 'git', 'markdown', 'typescript', 'react', 'redux',],
          links: [
            {
              href: 'https://github.com/SVA2021/movie_finder',
              title: 'код',
            },
            {
              href: 'https://www.figma.com/file/2YCro2tcWisnVciAZou1Ps/MOVIE_FINDER?node-id=24%3A482',
              title: 'Figma',
            },
            {
              href: 'https://movie-finder-sva2021.vercel.app/',
              title: 'www',
            },
          ],
        },
      ],
    };
  }
}
