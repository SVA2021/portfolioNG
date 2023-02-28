import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {LangService} from "../../layout/services/lang.service";
import {actualProjectT, futureProjectT, pageTitlesT, projectTitlesT} from "../../interfaces/projects";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, OnDestroy {

  myLang$: Subscription
  svgIconSrc: string
  pageTitles: pageTitlesT
  projectTitles: projectTitlesT
  futureProjects: futureProjectT[]
  actualProjects: actualProjectT[]

  constructor(
    public projects: ProjectsService,
    public lang: LangService,
  ) {
    this.myLang$ = Subscription.EMPTY;
    this.pageTitles = this.projects.pageTitles[this.lang.lastLang];
    this.projectTitles = this.projects.projectTitles[this.lang.lastLang];
    this.futureProjects = this.projects.futureProjects;
    this.actualProjects = this.projects.actualProjects;
    this.svgIconSrc = this.projects.svgIconSrc;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
        this.pageTitles = this.projects.pageTitles[lang];
        this.projectTitles = this.projects.projectTitles[lang];
      }
    )
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
