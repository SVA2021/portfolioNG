import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {formFields, formWarnings} from "../interfaces";
import {LangService} from "../../../layout/services/lang.service";
import {ContactFormService} from "../../services";
import {Subscription} from "rxjs";
import {SmartdevService} from "../../../services/smartdev.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit, OnDestroy, AfterContentChecked {

  contacts: FormGroup
  fields: formFields
  warnings: formWarnings
  myLang$: Subscription
  user$: Subscription
  userName: string
  userEmail: string

  constructor(
    public lang: LangService,
    public contactFormService: ContactFormService,
    public smartDev: SmartdevService,
    public auth: AuthService,
  ) {
    this.contacts = new FormGroup({});
    this.fields = this.contactFormService.contactForm[this.lang.lastLang].fields;
    this.warnings = this.contactFormService.contactForm[this.lang.lastLang].warnings;
    this.myLang$ = Subscription.EMPTY;
    this.user$ = Subscription.EMPTY;
    this.userName = '';
    this.userEmail = '';
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.fields = this.contactFormService.contactForm[lang].fields;
      this.warnings = this.contactFormService.contactForm[lang].warnings;
    });
    this.user$ = this.auth.user.subscribe(user => {
      this.userName = user?.displayName ?? '';
      this.userEmail = user?.email ?? '';
    });
    this.contacts = new FormGroup({
        name: new FormControl(this.userName ?? '', [Validators.required, Validators.minLength(3)]),
        email: new FormControl(this.userEmail ?? '', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(240)]),
      }
    );
  }

  submit() {
    if (this.contacts.invalid) return;

    let smartData = new FormData();
    smartData.append('name', this.contacts.value.name);
    smartData.append('email', this.contacts.value.email);
    smartData.append('message', this.contacts.value.message);

    this.smartDev.sendForm(smartData);
    this.contacts.reset();
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
    this.user$.unsubscribe();
    this.contacts.reset();
  }

  ngAfterContentChecked(): void {
    if (this.userName && this.userEmail) {
      this.contacts.patchValue({
        name: this.userName ?? '',
        email: this.userEmail ?? '',
      })
    }
  }

}
