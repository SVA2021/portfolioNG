import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {actualProjectT,} from "../../../interfaces/projects";
import {webSkill} from "../../../interfaces/admin";
import {AdminService} from "../../../services/admin.service";
import {ProjectsService} from "../../../services/projects.service";

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
  skills: webSkill[]
  skillsFull: webSkill[]
  svgIconSrc: string

  constructor(
    admin: AdminService,
    public projects: ProjectsService,
  ) {
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
    this.skills = this.initialProject?.skills ?? [];
    this.skillsFull = admin.webSkillsFull;
    this.svgIconSrc = this.projects.svgIconSrc;
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
      skills: this.skills,
      links: [],
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

  toggleSkill(skill: webSkill) {
    this.skills.includes(skill)
      ? this.skills = this.skills.filter(item => item !== skill)
      : this.skills.push(skill);
    console.log(skill)
  }

}
