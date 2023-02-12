import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  @Input() title: string | undefined
  @Input() type: 'h3' | 'h4' | undefined

  constructor() {
  }

  ngOnInit(): void {
    if (this.type === undefined) this.type = 'h3'
  }

}
