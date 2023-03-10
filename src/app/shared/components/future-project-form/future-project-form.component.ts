import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {futureProjectT} from "../../../interfaces/projects";

@Component({
  selector: 'app-future-project-form',
  templateUrl: './future-project-form.component.html',
  styleUrls: ['./future-project-form.component.scss']
})
export class FutureProjectFormComponent implements OnInit, OnDestroy, OnChanges {

  future: FormGroup
  @Input() initialProject: futureProjectT | undefined | null
  @Output() futureProjectTEventEmitter = new EventEmitter<futureProjectT>();

  constructor() {
    this.future = new FormGroup([]);
  }

  ngOnInit(): void {
    this.future = new FormGroup({
        name: new FormControl(this.initialProject?.name ?? '', [Validators.required, Validators.minLength(3)]),
        descriptionEn: new FormControl(this.initialProject?.description.en ?? '', [Validators.required, Validators.minLength(3),]),
        descriptionRu: new FormControl(this.initialProject?.description.ru ?? '', [Validators.required, Validators.minLength(3),]),
        whyEn: new FormControl(this.initialProject?.why.en ?? '', [Validators.required, Validators.minLength(3),]),
        whyRu: new FormControl(this.initialProject?.why.ru ?? '', [Validators.required, Validators.minLength(3),]),
        technologies: new FormControl(this.initialProject?.technologies ?? '', [Validators.required, Validators.minLength(3),]),
        newSkills: new FormControl(this.initialProject?.newSkills ?? '', [Validators.required, Validators.minLength(3),]),
      }
    );
  }


  submit() {
    if (this.future.invalid) return;
    let newFutureProject: futureProjectT = {
      id: this.initialProject?.id ?? Date.now(),
      name: this.future.value.name,
      description: {
        en: this.future.value.descriptionEn,
        ru: this.future.value.descriptionRu,
      },
      why: {
        en: this.future.value.whyEn,
        ru: this.future.value.whyRu,
      },
      technologies: this.future.value.technologies,
      newSkills: this.future.value.newSkills,
    }

    this.futureProjectTEventEmitter.emit(newFutureProject);
    this.future.reset();
  }

  ngOnDestroy(): void {
    this.future.reset();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.future.patchValue({
      name: this.initialProject?.name ?? '',
      descriptionEn: this.initialProject?.description.en ?? '',
      descriptionRu: this.initialProject?.description.ru ?? '',
      whyEn: this.initialProject?.why.en ?? '',
      whyRu: this.initialProject?.why.ru ?? '',
      technologies: this.initialProject?.technologies ?? '',
      newSkills: this.initialProject?.newSkills ?? '',
    })
  }
}
