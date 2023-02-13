import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {langT} from "../interfaces/lang";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  get activeLang$(): Subject<langT> {
    return this._activeLang$;
  }

  private readonly _activeLang$: Subject<langT>

  constructor() {
    this._activeLang$ = new Subject<langT>();
    this._activeLang$.next('en');
  }

  toggleLang(newLang: langT): void {
    this._activeLang$.next(newLang);
  }

}