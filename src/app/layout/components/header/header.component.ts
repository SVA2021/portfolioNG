import {Component, OnInit} from '@angular/core';
import {MenuItemI} from "../../interfaces/header";
import {HeaderService} from "../../services/header.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameArray: string []
  menuLinks: MenuItemI[]

  constructor(
    public header: HeaderService,
  ) {
    this.nameArray = [];
    this.menuLinks = [];
  }

  ngOnInit(): void {
    this.nameArray = this.header.logo;
    this.menuLinks = this.header.menuLinks;
  }

}
