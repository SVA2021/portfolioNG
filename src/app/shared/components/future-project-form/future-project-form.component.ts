import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {futureProjectT} from "../../../interfaces/projects";

@Component({
  selector: 'app-future-project-form',
  templateUrl: './future-project-form.component.html',
  styleUrls: ['./future-project-form.component.scss']
})
export class FutureProjectFormComponent implements OnInit, OnDestroy {

  future: FormGroup

  constructor() {
    this.future = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(3)]),
        descriptionEn: new FormControl('', [Validators.required, Validators.minLength(3),]),
        descriptionRu: new FormControl('', [Validators.required, Validators.minLength(3),]),
        whyEn: new FormControl('', [Validators.required, Validators.minLength(3),]),
        whyRu: new FormControl('', [Validators.required, Validators.minLength(3),]),
        technologies: new FormControl('', [Validators.required, Validators.minLength(3),]),
        newSkills: new FormControl('', [Validators.required, Validators.minLength(3),]),
      }
    );
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.future.invalid) return;
    let newFutureProject: futureProjectT = {
      id: Date.now(),
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

    console.log(newFutureProject)
    // this.future.reset();
  }

  ngOnDestroy(): void {
    // this.future.reset();
  }
}
