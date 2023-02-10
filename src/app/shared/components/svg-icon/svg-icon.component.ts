import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {

  @Input() path: string | undefined;
  @Input() id: string | undefined;
  @Input() small: boolean | undefined;

  link: string;

  constructor() {
    this.link = '';
  }

  ngOnInit(): void {
    this.link = this.id ? `${this.path}#${this.id}` : ''
  }

}
