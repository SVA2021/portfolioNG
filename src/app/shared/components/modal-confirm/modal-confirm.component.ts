import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {LangService} from "../../../layout/services/lang.service";
import {ModalConfirmService} from "../../services";

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit, OnDestroy {

  myLang$: Subscription
  title: string
  yes: string
  no: string
  @Output() clickHandler = new EventEmitter<'yes' | 'no'>();

  constructor(
    public lang: LangService,
    public modal: ModalConfirmService,
  ) {
    this.myLang$ = Subscription.EMPTY;
    this.title = this.modal.title[this.lang.lastLang];
    this.yes = this.modal.yes[this.lang.lastLang];
    this.no = this.modal.no[this.lang.lastLang];
  }

  ngOnInit(): void {
    this.myLang$ = this.lang.activeLang$.subscribe(lang => {
      this.title = this.modal.title[lang];
      this.yes = this.modal.yes[lang];
      this.no = this.modal.no[lang];
    })
  }

  ngOnDestroy(): void {
    this.myLang$.unsubscribe();
  }

  yesHandler() {
    this.clickHandler.emit('yes');
  }

  noHandler() {
    this.clickHandler.emit('no');
  }
}
