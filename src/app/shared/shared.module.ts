import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroWordComponent, SvgIconComponent} from "./components";



@NgModule({
  declarations: [
    HeroWordComponent,
    SvgIconComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroWordComponent,
    SvgIconComponent,
  ]
})
export class SharedModule { }
