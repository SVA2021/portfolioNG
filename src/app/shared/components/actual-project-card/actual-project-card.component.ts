import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {actualProjectT, projectTitlesT} from "../../../interfaces/projects";
import {LangService} from "../../../layout/services/lang.service";
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-actual-project-card',
  templateUrl: './actual-project-card.component.html',
  styleUrls: ['./actual-project-card.component.scss']
})
export class ActualProjectCardComponent implements OnInit, OnDestroy {

  svgIconSrc: string
  myLang$: Subscription
  projectTitles: projectTitlesT
  @Input() project!: actualProjectT

  constructor(
    public lang: LangService,
    public projects: ProjectsService,
  ) {
    this.projectTitles = this.projects.projectTitles[this.lang.lastLang];
    this.myLang$ = Subscription.EMPTY;
    this.svgIconSrc = this.projects.svgIconSrc;
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
