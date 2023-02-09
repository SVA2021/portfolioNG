import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {RouterLinkWithHref, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
    imports: [
        CommonModule,
        RouterOutlet,
        RouterLinkWithHref
    ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
