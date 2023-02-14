import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {langT} from "../interfaces/lang";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  get lastLang(): langT {
    return this._lastLang;
  }

  activeLang$: Subject<langT>
  private _lastLang: langT

  constructor() {
    this._lastLang = 'en';
    this.activeLang$ = new Subject<langT>();
    this.activeLang$.next('en');
    this.activeLang$.subscribe(lang => this._lastLang = lang);
  }

  toggleLang(): void {
    let newLang: langT = this.lastLang === 'en' ? 'ru' : 'en';
    this.activeLang$.next(newLang);
  }

}
