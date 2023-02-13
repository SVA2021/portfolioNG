import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeLinkI} from "../../interfaces/home";
import {HomeService} from "../../services/home.service";
import {LangService} from "../../layout/services/lang.service";

@Component({
  selector: 'app-pages-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  fullName: string[];
  profession: string;
  links: HomeLinkI[];

  constructor(
    public home: HomeService,
    public lang: LangService,
  ) {
    this.fullName = [];
    this.profession = '';
    this.links = [];
  }

  ngOnInit(): void {
    this.profession = this.home.profession;
    this.links = this.home.HomeLinks;
    this.lang.activeLang$.subscribe(lang => this.fullName = this.home.fullName[lang])
  }

  ngOnDestroy(): void {
    this.lang.activeLang$.unsubscribe();
  }

}
