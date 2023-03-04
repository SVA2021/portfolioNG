import {Component, OnDestroy, OnInit} from '@angular/core';
import {LangService} from "../../layout/services/lang.service";
import {ContactService} from "../../services/contact.service";
import {contactItem} from "../../interfaces/contact";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {

  title: string
  svgIconSrc: string
  contacts: contactItem[]
  myLang$: Subscription

  constructor(
    public contact: ContactService,
    public lang: LangService,
  ) {
    this.title = this.contact.title[lang.lastLang];
    this.contacts = this.contact.contacts;
    this.svgIconSrc = this.contact.svgIconSrc;
    this.myLang$ = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang =>
      this.title = this.contact.title[lang]
    );
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

}
