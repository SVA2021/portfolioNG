import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeroWordComponent, SectionTitleComponent, SubtitleComponent, SvgIconComponent} from "./components";


@NgModule({
  declarations: [
    HeroWordComponent,
    SvgIconComponent,
    SectionTitleComponent,
    SubtitleComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HeroWordComponent,
    SvgIconComponent,
    SectionTitleComponent,
    SubtitleComponent,
  ]
})
export class SharedModule {
}
