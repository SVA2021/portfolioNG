import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  ActualProjectCardComponent, ActualProjectFormComponent,
  ContactFormComponent, FutureProjectComponent, FutureProjectFormComponent, GalleryComponent,
  HeroWordComponent, ModalConfirmComponent,
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
    GalleryComponent,
    FutureProjectFormComponent,
    FutureProjectComponent,
    ActualProjectCardComponent,
    ActualProjectFormComponent,
    ModalConfirmComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
  ],
  exports: [
    HeroWordComponent,
    SvgIconComponent,
    SectionTitleComponent,
    SubtitleComponent,
    ContactFormComponent,
    GalleryComponent,
    FutureProjectFormComponent,
    FutureProjectComponent,
    ActualProjectCardComponent,
    ActualProjectFormComponent,
    ModalConfirmComponent,

  ]
})
export class SharedModule {
}
