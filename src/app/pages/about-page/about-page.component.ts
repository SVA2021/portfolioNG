import {Component, OnDestroy, OnInit} from '@angular/core';
import {AboutService} from "../../services/about.service";
import {ghStatsItemI} from "../../interfaces/about";
import {LangService} from "../../layout/services/lang.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  title: string
  bioTitle: string
  bioFull: string
  skillTitle: string
  mySkills: string[]
  iconSrc: string
  ghTitle: string
  ghStats: ghStatsItemI
  ghMostUsed: ghStatsItemI
  certificateTitle: string
  certificateTip: string
  certificateImgSrc: string
  certificateImgAlt: string
  myLang$: Subscription

  constructor(
    public about: AboutService,
    public lang: LangService,
  ) {
    this.title = this.about.common[lang.lastLang].title.title;
    this.bioTitle = this.about.common[lang.lastLang].title.bio;
    this.bioFull = this.about.common[lang.lastLang].bioFull;
    this.skillTitle = this.about.common[lang.lastLang].title.skill;
    this.ghTitle = this.about.common[lang.lastLang].title.gh;
    this.ghStats = this.about.common[lang.lastLang].stats;
    this.ghMostUsed = this.about.common[lang.lastLang].mostUsed;
    this.certificateTitle = this.about.common[lang.lastLang].title.certificate;
    this.certificateTip = this.about.common[lang.lastLang].certificateTip;
    this.certificateImgAlt = this.about.common[lang.lastLang].certificateImgAlt;
    this.mySkills = this.about.mySkills;
    this.iconSrc = this.about.svgIconSrc;
    this.certificateImgSrc = this.about.certificateImgSrc;
    this.myLang$ = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.title = this.about.common[lang].title.title;
      this.bioTitle = this.about.common[lang].title.bio;
      this.bioFull = this.about.common[lang].bioFull;
      this.skillTitle = this.about.common[lang].title.skill;
      this.ghTitle = this.about.common[lang].title.gh;
      this.ghStats = this.about.common[lang].stats;
      this.ghMostUsed = this.about.common[lang].mostUsed;
      this.certificateTitle = this.about.common[lang].title.certificate;
      this.certificateTip = this.about.common[lang].certificateTip;
      this.certificateImgAlt = this.about.common[lang].certificateImgAlt;
    })

  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
