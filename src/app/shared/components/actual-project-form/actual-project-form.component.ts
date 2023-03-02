import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {actualProjectT,} from "../../../interfaces/projects";

@Component({
  selector: 'app-actual-project-form',
  templateUrl: './actual-project-form.component.html',
  styleUrls: ['./actual-project-form.component.scss']
})
export class ActualProjectFormComponent implements OnInit, OnDestroy {

  @Input() initialProject: actualProjectT | undefined | null
  @Output() actualProject = new EventEmitter<actualProjectT>();
  actual: FormGroup
  gallery: string[]

  constructor() {
    this.actual = new FormGroup({
        name: new FormControl(this.initialProject?.name ?? '', [Validators.required, Validators.minLength(3)]),
        descriptionEn: new FormControl(this.initialProject?.description.en ?? '', [Validators.required, Validators.minLength(3),]),
        descriptionRu: new FormControl(this.initialProject?.description.ru ?? '', [Validators.required, Validators.minLength(3),]),
        whyEn: new FormControl(this.initialProject?.why.en ?? '', [Validators.required, Validators.minLength(3),]),
        whyRu: new FormControl(this.initialProject?.why.ru ?? '', [Validators.required, Validators.minLength(3),]),
        technologies: new FormControl(this.initialProject?.technologies ?? '', [Validators.required, Validators.minLength(3),]),
        additionalEn: new FormControl(this.initialProject?.additional.en ?? '', [Validators.required, Validators.minLength(3),]),
        additionalRu: new FormControl(this.initialProject?.additional.ru ?? '', [Validators.required, Validators.minLength(3),]),
        galleryItem: new FormControl(''),
      }
    );
    this.gallery = this.initialProject?.gallery ?? [];
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.actual.reset();
  }

  submit() {
    if (this.actual.invalid) return;
    let newProject: actualProjectT = {
      id: Date.now(),
      name: this.actual.value.name,
      description: {
        en: this.actual.value.descriptionEn,
        ru: this.actual.value.descriptionRu,
      },
      why: {
        en: this.actual.value.whyEn,
        ru: this.actual.value.whyRu,
      },
      technologies: this.actual.value.technologies,
      additional: {
        en: this.actual.value.additionalEn,
        ru: this.actual.value.additionalRu,
      },
      gallery: this.gallery,
      links: [],
      skills: [],
    }

    this.actualProject.emit(newProject);

    // this.future.reset();
  }

  addGalleryItem() {
    this.gallery.push(this.actual.value.galleryItem);
    this.actual.patchValue({galleryItem: ''});
  }

  delGalleryItem(delIndex: number) {
    this.gallery = this.gallery.filter((item, index) => index !== delIndex);
  }

}
