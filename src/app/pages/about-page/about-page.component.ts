import {Component, OnInit} from '@angular/core';
import {AboutService} from "../../services/about.service";

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

  constructor(
    public about: AboutService
  ) {
    this.title = '';
    this.bioTitle = '';
    this.bioFull = '';
    this.skillTitle = '';
    this.mySkills = [];
    this.iconSrc = 'src/assets/skills.svg';
  }

  ngOnInit(): void {
    this.title = this.about.title;
    this.bioTitle = this.about.bioTitle;
    this.bioFull = this.about.bioFull;
    this.skillTitle = this.about.skillTitle;
    this.mySkills = this.about.mySkills;
    // this.iconSrc = this.about.svgIconSrc;
  }

}
