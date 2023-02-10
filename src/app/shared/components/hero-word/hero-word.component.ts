import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero-word',
  templateUrl: './hero-word.component.html',
  styleUrls: ['./hero-word.component.scss']
})
export class HeroWordComponent implements OnInit {

  @Input() word?: string
  firstLetter = ''
  restLetters = ''

  constructor() {
  }

  ngOnInit(): void {
    this.firstLetter = this.word?.slice(0, 1) ?? ''
    this.restLetters = this.word?.slice(1) ?? ''
  }

}
