import {Component, OnInit} from '@angular/core';
import {AboutService} from "../../services/about.service";
import {ghStatsItemI} from "../../interfaces/about";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

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

  constructor(
    public about: AboutService
  ) {
    this.title = '';
    this.bioTitle = '';
    this.bioFull = '';
    this.skillTitle = '';
    this.mySkills = [];
    this.iconSrc = '';
    this.ghTitle = '';
    this.ghStats = {} as ghStatsItemI;
    this.ghMostUsed = {} as ghStatsItemI;
    this.certificateTitle = '';
    this.certificateTip = '';
    this.certificateImgSrc = '';
    this.certificateImgAlt = '';
  }

  ngOnInit(): void {
    this.title = this.about.title;
    this.bioTitle = this.about.bioTitle;
    this.bioFull = this.about.bioFull;
    this.skillTitle = this.about.skillTitle;
    this.mySkills = this.about.mySkills;
    this.iconSrc = this.about.svgIconSrc;
    this.ghTitle = this.about.ghTitle;
    this.ghStats = this.about.ghStats;
    this.ghMostUsed = this.about.ghMostUsed;
    this.certificateTitle = this.about.certificateTitle;
    this.certificateTip = this.about.certificateTip;
    this.certificateImgSrc = this.about.certificateImgSrc;
    this.certificateImgAlt = this.about.certificateImgAlt;
  }

}
