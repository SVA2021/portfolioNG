import {Injectable} from '@angular/core';
import {
  projectLangTitlesT,
  pageLangTitlesT,
  futureProjectT, actualProjectT
} from "../interfaces/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  pageTitles: pageLangTitlesT
  projectTitles: projectLangTitlesT
  futureProjects: futureProjectT[]
  actualProjects: actualProjectT[]
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
    this.futureProjects = [
      {
        id: 99,
        name: 'book catalog',
        description: {
          en: 'catalog of some facts about books',
          ru: 'каталог информации о разных книгах',
        },
        why: {
          en:
            `In this project, I want to take as much as possible as a basis
            source code from the "movie catalog" project. After that, add to this MobX and GraphQL
            (client) to start studying of these technologies. Books can be replaced with something else
            (depending on the presence of an open GraphQL API).`,
          ru: `В этом проекте я хочу взять за основу как можно больше исходных данных из проекта "movie catalogue".
          и добавить к этому изучение основ MobX и GraphQL(client).
          Книги могут быть заменены на что-то другое (зависит от наличия открытого GraphQL API)`,
        },
        technologies: 'React, React-Test, Material UI, Typescript, SASS, CSSmodules, Git, GitHub',
        newSkills: 'GraphQL, MobX',
      },
      {
        id: 98,
        name: 'English Lessons',
        description: {
          en: 'landing page of a teacher (or school) for learning English',
          ru: 'лендинг учителя (или школы) по изучению английского языка',
        },
        why: {
          en: `In this project, I want to fix knowledge about analytics, maps, animations,
          global variables of CSS, theme switchers.`,
          ru: `В этом проекте я хочу закрепить работу с аналитикой, картами, анимациями,
          глобальными переменными CSS, переключателями тем`,
        },
        technologies: 'HTML5, CSS3, JS, SASS, Git, GitHub, GitHub.Pages, BEM',
        newSkills: 'Gulp',
      },
      {
        id: 97,
        name: 'Repair Service',
        description: {
          en: 'landing page of repair service of something (like fridge and washing machine)',
          ru: 'лендинг ремонтного сервиса (например холодильников и стиральных машин)',
        },
        why: {
          en: `In this project, I want to fix knowledge from "English lessons" project and try to maximum code reusage`,
          ru: `В этом проекте я хочу максимально переиспользовать код и знания из проекта "English lessons"`,
        },
        technologies: 'HTML5, CSS3, JS, SASS, Git, GitHub, GitHub.Pages, BEM',
        newSkills: 'Gulp',
      },
      {
        id: 96,
        name: 'Online Shop',
        description: {
          en: 'shop of some specific or mostly used goods',
          ru: 'онлайн магазин по продаже особенных или наоборот широко распространенных товаров',
        },
        why: {
          en: `I plan to continue React library learning. Especially SSR (Server Side Rendering) based on NextJS`,
          ru: `В этом проекте я продолжу изучение React и начну изучать SSR (Server Side Rendering) на основе NextJS`,
        },
        technologies: 'React, React-Test, Material UI, Typescript, SASS, CSSmodules, Git, GitHub',
        newSkills: 'NextJS',
      },
      {
        id: 95,
        name: 'Realty Agency',
        description: {
          en: 'real estate agency of a network of new buildings',
          ru: 'агентство недвижимости сети новостроек',
        },
        why: {
          en: `In this project, I want to take as much as possible as a basis source code from the "online shop" project`,
          ru: `В этом проекте я хочу взять за основу как можно больше исходных данных из проекта "online shop"`,
        },
        technologies: 'React, React-Test, Material UI, Typescript, SASS, CSSmodules, Git, GitHub',
        newSkills: 'NextJS',
      },
    ];
    this.actualProjects = [
      {
        id: 10,
        name: 'moviefinder',
        description: {
          en: `project is SPA (Single Page Application), which connected to custom unoffiicial "KinoPoisk"
          Backend API. At this moment implemented: top lists, detail info by ID, search by keyword and other params.`,
          ru: `проект это SPA (Single Page Application), подключенное к неофициальному Backend
          серверу-клону "КиноПоиска" На данный момент реализованы: топ-листы, детальное инфо по ID,
          поиск по ключевым словам и параметрам`,
        },
        why: {
          en: `Target is to continue learning React library in combine with other libraries like Material UI,
          Swiper, Axios, React-hook-form and Unit Testing.`,
          ru: `Цель продолжить изучение React в комбинации с такими библиотеками как Material UI, Swiper, Axios,
          React-hook-form а также Unit тестирование`,
        },
        technologies: 'React, Axios, Redux,, Redux-Toolkit, Redux-Thunk, Typescript, StyledComponents, Git, GitHub, Vercel(deploy)',
        additional: {
          en: `Some features that i want to implement was not realized by BackEnd limitations.
          UI/ UX designed by me.`,
          ru: `Не все исходные возможности были реализованы, частично из-за ограничений BackEnd.
          Дизайн UX/ UI разработан мной.`,
        },
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
            title: {en: 'code', ru: 'код',},
          },
          {
            href: 'https://www.figma.com/file/2YCro2tcWisnVciAZou1Ps/MOVIE_FINDER?node-id=24%3A482',
            title: {en: 'Figma', ru: 'Figma',},
          },
          {
            href: 'https://movie-finder-sva2021.vercel.app/',
            title: {en: 'www', ru: 'www',},
          },
        ],
      },
      {
        id: 9,
        name: 'portfolio',
        description: {
          en: `project is the multipage adaptive landing of me as front-end developer, this edition based on
          pure HTML and JS, and SASS for styling`,
          ru: `проект это адаптивный мультистраничный лендинг меня как фронтенд-разработчика. данная версия
          базовая и написана на чистом HTML и JS, а также SASS для стилей`,
        },
        why: {
          en: `Target is to combine all useful information about me and my skills in front-end.
          It will help you to understand that you need to hire me`,
          ru: `Цель проекта - собрать всю полезную информацию обо мне и моих навыках во фронтенде.
          Это поможет Вам понять, что я Вам нужен`,
        },
        technologies: 'HTML5, CSS3, JS, SASS, Git, GitHub, (+ GitHub.Pages), BEM',
        additional: {
          en: `BEM-naming of classes, adaptive, accessibility.
          UX / UI developed by me and includes experience of previous projects.`,
          ru: `БЭМ-именование классов, адаптивность, доступность.
          Дизайн UX / UI полностью разработан мной с использованием опыт прошлых проектов`,
        },
        gallery: [
          'https://ik.imagekit.io/sva/projects/portfolio/portfolio_1.png',
          'https://ik.imagekit.io/sva/projects/portfolio/portfolio_0.png',
          'https://ik.imagekit.io/sva/projects/portfolio/portfolio_1_720.png',
          'https://ik.imagekit.io/sva/projects/portfolio/portfolio_1_360.png',
        ],
        skills: ['html5', 'css3', 'js', 'git', 'markdown', 'github', 'sass',],
        links: [
          {
            href: 'https://github.com/SVA2021/MyPortfolio',
            title: {en: 'code', ru: 'код',},
          },
          {
            href: 'https://sva2021.github.io/MyPortfolio/',
            title: {en: 'www', ru: 'www',},
          },
        ],
      },
      {
        id: 8,
        name: 'raw',
        description: {
          en: `project is SPA (Single Page Application), which contains 4 different services with
          asynchronous functionality inside. 3 of them received data from external resources.<br>
          Pomodoro: popular method of self-organisation.<br>
          Weather: always needed info, search by city.<br>
          Holidays: all world (for week) or country (for year).<br>
          Currency: always changes, it useful to check.`,
          ru: `проект это SPA (Single Page Application), в котором собраны 4 различных сервиса с
          асинхронной работой внутри. 3 из них получают данные с помощью сторонних ресурсов.<br>
          Помодоро: популярный метод самоорганизации<br>
          Погода: всегда нужная инфо, поиск по городу.<br>
          Праздники: всего мира (неделя) или одной страны (год).<br>
          Курс валют: всегда меняется, полезно следить.`,
        },
        why: {
          en: `Target of this project is self education in work with separate external independent resources
          throw REST API. Also, with possibility to use these modules (Widgets) in future education and new projects`,
          ru: `Цель проекта - самообразование в области работы с независимыми от меня внешними REST API.
          С возможностью в дальнейшем использовать отдельные модули(Widgets) в новых проектах`,
        },
        technologies: 'React, Axios, Redux, Redux-Toolkit, Redux-Thunk, Typescript, SASS, CSSmodules, Git, GitHub, GitHub.Pages',
        additional: {
          en: `classNames used for style changes. Flag icons library used to show countries flags.
          UI/ UX designed by me`,
          ru: `classNames для работы со стилями. flag icons для отображения флагов государств.
          Дизайн UX/ UI разработан мной.`,
        },
        gallery: [
          'https://ik.imagekit.io/sva/projects/raw/raw_0.png',
          'https://ik.imagekit.io/sva/projects/raw/raw_1.png',
          'https://ik.imagekit.io/sva/projects/raw/raw_2.png',
          'https://ik.imagekit.io/sva/projects/raw/raw_3.png',
          'https://ik.imagekit.io/sva/projects/raw/raw_4.png',
          'https://ik.imagekit.io/sva/projects/raw/raw_5.png',
        ],
        skills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',],
        links: [
          {
            href: 'https://github.com/SVA2021/raw/',
            title: {en: 'code', ru: 'код',},
          },
          {
            href: 'https://youtu.be/ZRYcnkr-vbs',
            title: {en: 'video', ru: 'видео',},
          },
          {
            href: 'https://sva2021.github.io/raw/',
            title: {en: 'www', ru: 'www',},
          },
        ],
      },
      {
        id: 7,
        name: 'galeoncar',
        description: {
          en: `project is the multipage adaptive landing of premium car rent service.<br>
          MockUp of this project had initially very good quality and contains many fascinating tasks.
          As is different functional elements and many images.`,
          ru: `проект это адаптивный мультистраничный лендинг сервиса по прокату премиум автомобилей.<br>
          Дизайн данного проекта изначально был очень хорошо проработан и содержал много интересных задач в виде
          различных функциональных элементов, а также большого наличия графики`,
        },
        why: {
          en: `Target is experience in SASS and pure HTML5. Code reusage where it's possible.
          Tryouts of different approaches of code organization. <br>
          For example, code nesting for media queries in SASS was made in 2 ways: <br>
          1.  All section code into every media query. <br>
          2. Separate media query for every class/subclass.`,
          ru: `Цель проекта - практическая работа с SASS и в целом с "чистым" HTML5. Использование части кода
          по возможности. Работа с разными подходами к организации кода <br>
          например, вложенность медиа запросов
          сделана 2мя способами: <br>
          1. весь код секции документа внутри медиа. <br>
          2.  отдельные медиа для каждого класса.)`,
        },
        technologies: 'HTML5, CSS3, JS, SASS, Git, GitHub, (+ GitHub.Pages), BEM',
        additional: {
          en: `BEM-naming of classes, adaptive, accessibility`,
          ru:  `БЭМ-именование классов, адаптивность, доступность`,
        },
        gallery: [
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_0.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_1.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_2.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_3.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_4.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_5.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_6.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_7.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_8.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_9.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_10.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_11.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_12.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_13.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_14.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_15.png',
          'https://ik.imagekit.io/sva/projects/galeoncar/galeoncar_16.png',
        ],
        skills: ['html5', 'css3', 'js', 'git', 'markdown', 'github', 'sass',],
        links: [
          {
            href: 'https://github.com/SVA2021/galeoncar/',
            title: {en: 'code', ru: 'код',},
          },
          {
            href: 'https://youtu.be/Cgav-ZgsTdY',
            title: {en: 'video', ru: 'видео',},
          },
          {
            href: 'https://sva2021.github.io/galeoncar/',
            title: {en: 'www', ru: 'www',},
          },
          {
            href: 'https://www.figma.com/file/5NRQHqr7PEOYF5Roi3djy6/Galeoncar?node-id=87%3A2372',
            title: {en: 'figma', ru: 'figma',},
          },
        ],
      },
      {
        id: 6,
        name: 'css_edu',
        description: {
          en: `project is SPA (Single Page Application), which demonstrates effects from some CSS
          features and JS methods.<br>
          CSS: main types of positioning elements, CSS selectors, animation of different properties,
          working with images and gradients.<br>
          JS: array and string methods.`,
          ru: `проект это SPA (Single Page Application), в котором демонстрируется работа и влияние
          некоторых свойств CSS и методов JavaScript.<br>
          CSS: основные пункты по позиционированию элементов, селекторы CSS, анимация различных свойств,
          работы с изображениями и градиентами.<br>
          JS: методы массивов и строк`,
        },
        why: {
          en: `Target of this project is self education. Therefore, were chosen most usable properties and parameters.
          Also, this project will be used as base for tryouts of new technologies etc.`,
          ru: `Цель проекта - самообразование, поэтому были выбраны для закрепления одни из самых часто используемых
          параметров. Также в будущем планирую использовать его как базу для отработки новых технологий и приемов.`,
        },
        technologies: 'React, Redux, Redux-Toolkit, Typescript, SASS, CSSmodules, Git, GitHub, GitHub.Pages',
        additional: {
          en: `Dynamic changes in animation provided with react-spring library.
          UI/ UX designed by me.`,
          ru: `React-spring для реализации анимаций. Дизайн UX/ UI разработан мной.`,
        },
        gallery: [
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_0.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_1.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_2.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_3.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_4.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_5.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_6.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_7.png',
          'https://ik.imagekit.io/sva/projects/css_edu/css_edu_8.png',
        ],
        skills: ['html5', 'git', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript',],
        links: [
          {
            href: 'https://github.com/SVA2021/CSS-EDU/',
            title: {en: 'code', ru: 'код',},
          },
          {
            href: 'https://youtu.be/jzGfCmMDZwA',
            title: {en: 'video', ru: 'видео',},
          },
          {
            href: 'https://sva2021.github.io/CSS-EDU/',
            title: {en: 'www', ru: 'www',},
          },
        ],
      },
    ];
  }
}
