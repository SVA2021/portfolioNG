import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formFields, formWarnings} from "../interfaces";
import {LangService} from "../../../layout/services/lang.service";
import {ContactFormService} from "../../services";
import {Subscription} from "rxjs";
import {SmartdevService} from "../../../services/smartdev.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy {

  contacts: FormGroup
  fields: formFields
  warnings: formWarnings
  myLang$: Subscription

  constructor(
    public lang: LangService,
    public contactFormService: ContactFormService,
    public smartdev: SmartdevService
  ) {
    this.contacts = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(240)]),
      }
    );
    this.fields = this.contactFormService.contactForm[this.lang.lastLang].fields;
    this.warnings = this.contactFormService.contactForm[this.lang.lastLang].warnings;
    this.myLang$ = Subscription.EMPTY;
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.fields = this.contactFormService.contactForm[lang].fields;
      this.warnings = this.contactFormService.contactForm[lang].warnings;
    })
  }

  submit() {
    if (this.contacts.invalid) return;

    let smartData = new FormData();
    smartData.append('name', this.contacts.value.name);
    smartData.append('email', this.contacts.value.email);
    smartData.append('message', this.contacts.value.message);

    this.smartdev.sendForm(smartData);
    this.contacts.reset();
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
    this.contacts.reset();
  }
}
