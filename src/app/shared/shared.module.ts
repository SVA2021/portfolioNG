import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  ContactFormComponent,
  HeroWordComponent,
  SectionTitleComponent,
  SubtitleComponent,
  SvgIconComponent
} from "./components";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    HeroWordComponent,
    SvgIconComponent,
    SectionTitleComponent,
    SubtitleComponent,
    ContactFormComponent,
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
    ],
  exports: [
    HeroWordComponent,
    SvgIconComponent,
    SectionTitleComponent,
    SubtitleComponent,
    ContactFormComponent,
  ]
})
export class SharedModule {
}
