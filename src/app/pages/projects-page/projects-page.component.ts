import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectsService} from "../../services/projects.service";
import {LangService} from "../../layout/services/lang.service";
import {actualProjectT, futureProjectT, pageTitlesT,} from "../../interfaces/projects";
import {Subscription} from "rxjs";
import {FirebaseService} from "../../services/firebase.service";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, OnDestroy {

  myLang$: Subscription
  pageTitles: pageTitlesT
  futureProjects: futureProjectT[]
  actualProjects: actualProjectT[]
  actualFbProjects$: Subscription
  futureFbProjects$: Subscription

  constructor(
    public projects: ProjectsService,
    public lang: LangService,
    public fb: FirebaseService,
  ) {
    this.myLang$ = Subscription.EMPTY;
    this.pageTitles = this.projects.pageTitles[this.lang.lastLang];
    this.futureProjects = [];
    this.actualProjects = [];
    this.actualFbProjects$ = Subscription.EMPTY;
    this.futureFbProjects$ = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang =>
      this.pageTitles = this.projects.pageTitles[lang]
    );
    this.actualFbProjects$ = this.fb.actualProjectsFb$.subscribe(store =>
      this.actualProjects = store
    );
    this.futureFbProjects$ = this.fb.futureProjectsFb$.subscribe(store =>
      this.futureProjects = store
    );
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
    this.actualFbProjects$.unsubscribe();
    this.futureFbProjects$.unsubscribe();
  }

}
