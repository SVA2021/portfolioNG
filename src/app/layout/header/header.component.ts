import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nameArray: string [] = 'sva'.split('')

  menuLinks: MenuItemT[] = [
    {href: '/', title: 'pages',},
    {href: '/projects', title: 'projects',},
    {href: '/about', title: 'about me',},
    {href: '/contacts', title: 'contacts',},
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}

type MenuItemT = {
  href: string
  title: string
}
