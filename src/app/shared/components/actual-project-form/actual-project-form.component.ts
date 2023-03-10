import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {actualProjectT, linkT,} from "../../../interfaces/projects";
import {webSkill} from "../../../interfaces/admin";
import {AdminService} from "../../../services/admin.service";
import {ProjectsService} from "../../../services/projects.service";

@Component({
  selector: 'app-actual-project-form',
  templateUrl: './actual-project-form.component.html',
  styleUrls: ['./actual-project-form.component.scss']
})
export class ActualProjectFormComponent implements OnInit, OnDestroy, OnChanges {

  @Input() initialProject: actualProjectT | undefined | null
  @Output() actualProject = new EventEmitter<actualProjectT>();
  actual: FormGroup
  gallery: string[]
  skills: webSkill[]
  skillsFull: webSkill[]
  svgIconSrc: string
  links: linkT[]

  constructor(
    admin: AdminService,
    public projects: ProjectsService,
  ) {
    this.actual = new FormGroup({});
    this.gallery = this.initialProject?.gallery ?? [];
    this.skills = this.initialProject?.skills ?? [];
    this.links = this.initialProject?.links ?? [];
    this.skillsFull = admin.webSkillsFull;
    this.svgIconSrc = this.projects.svgIconSrc;
  }

  ngOnInit(): void {
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
        linkItem: new FormGroup({
          href: new FormControl('',),
          titleEn: new FormControl('',),
          titleRu: new FormControl('',),
        }),
      }
    );
    this.gallery = this.initialProject?.gallery ?? [];
    this.skills = this.initialProject?.skills ?? [];
    this.links = this.initialProject?.links ?? [];
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
      links: this.links,
    }

    this.actualProject.emit(newProject);

    this.actual.reset();
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
  }

  addLinkItem() {
    let href = this.actual.value.linkItem.href.trim();
    let titleEn = this.actual.value.linkItem.titleEn.trim();
    let titleRu = this.actual.value.linkItem.titleRu.trim();
    if (!href || !titleEn || !titleRu) return;
    let newLink: linkT = {
      href: href,
      title: {en: titleEn, ru: titleRu,},
    };
    this.links.push(newLink);
    this.actual.patchValue({linkItem: {href: '', titleEn: '', titleRu: ''}});
  }

  delLinkItem(delIndex: number) {
    this.links = this.links.filter((item, index) => index !== delIndex);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.actual.patchValue({
      name: this.initialProject?.name ?? '',
      descriptionEn: this.initialProject?.description.en ?? '',
      descriptionRu: this.initialProject?.description.ru ?? '',
      whyEn: this.initialProject?.why.en ?? '',
      whyRu: this.initialProject?.why.ru ?? '',
      technologies: this.initialProject?.technologies ?? '',
      additionalEn: this.initialProject?.additional.en ?? '',
      additionalRu: this.initialProject?.additional.ru ?? '',
      galleryItem: '',
      linkItem: {href: '', titleEn: '', titleRu: ''},
    })
    this.gallery = this.initialProject?.gallery ?? [];
    this.skills = this.initialProject?.skills ?? [];
    this.links = this.initialProject?.links ?? [];
  }

}
