import {Component, OnInit} from '@angular/core';
import {HomeLinkI} from "../../interfaces/home";
import {HomeService} from "../../services/home.service";

@Component({
  selector: 'app-pages-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  fullName: string[];
  profession: string;
  links: HomeLinkI[];

  constructor(
    public home: HomeService,
  ) {
    this.fullName = [];
    this.profession = '';
    this.links = [];
  }

  ngOnInit(): void {
    this.fullName = this.home.fullName;
    this.profession = this.home.profession;
    this.links = this.home.HomeLinks;
  }

}
