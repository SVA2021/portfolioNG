import {Component, OnDestroy, OnInit} from '@angular/core';
import {certificatesTitlesT, galleryItemT} from "../../interfaces/certificates";
import {LangService} from "../../layout/services/lang.service";
import {CertificatesService} from "../../services/certificates.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-certificates-page',
  templateUrl: './certificates-page.component.html',
  styleUrls: ['./certificates-page.component.scss']
})
export class CertificatesPageComponent implements OnInit, OnDestroy {

  myLang$: Subscription
  titles: certificatesTitlesT
  gb: galleryItemT[]
  sl: galleryItemT[]
  w3s: galleryItemT[]
  learnJS: galleryItemT[]


  constructor(
    public lang: LangService,
    public certificates: CertificatesService,
  ) {
    this.myLang$ = Subscription.EMPTY;
    this.titles = this.certificates.titles[this.lang.lastLang];
    this.gb = this.certificates.gb;
    this.sl= this.certificates.sl;
    this.w3s = this.certificates.w3s;
    this.learnJS = this.certificates.learnJS;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang =>
      this.titles = this.certificates.titles[lang]
    )
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
