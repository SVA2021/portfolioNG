import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {futureProjectT, projectTitlesT} from "../../../interfaces/projects";
import {LangService} from "../../../layout/services/lang.service";
import {ProjectsService} from "../../../services/projects.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-future-project',
  templateUrl: './future-project.component.html',
  styleUrls: ['./future-project.component.scss']
})
export class FutureProjectComponent implements OnInit, OnDestroy {

  myLang$: Subscription
  projectTitles: projectTitlesT
  @Input() project: futureProjectT | undefined

  constructor(
    public lang: LangService,
    public projects: ProjectsService,
  ) {
    this.projectTitles = this.projects.projectTitles[this.lang.lastLang];
    this.myLang$ = Subscription.EMPTY;
  }


  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
        this.projectTitles = this.projects.projectTitles[lang];
      }
    )
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
