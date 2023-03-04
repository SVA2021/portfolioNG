import {Component, OnDestroy, OnInit} from '@angular/core';
import {HomeLinkI} from "../../interfaces/home";
import {HomeService} from "../../services/home.service";
import {LangService} from "../../layout/services/lang.service";
import {langT} from "../../layout/interfaces/lang";
import {Subscription} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-pages-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

  fullName: string[];
  profession: string;
  links: HomeLinkI[];
  lastLang: langT;
  myLang$: Subscription

  constructor(
    public home: HomeService,
    public lang: LangService,
    public auth: AuthService,
  ) {
    this.profession = this.home.profession;
    this.links = this.home.HomeLinks;
    this.lastLang = this.lang.lastLang;
    this.myLang$ = Subscription.EMPTY;
    this.fullName = this.home.fullName[this.lastLang];
    this.auth.loginAnonim();
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.fullName = this.home.fullName[lang];
    });
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
