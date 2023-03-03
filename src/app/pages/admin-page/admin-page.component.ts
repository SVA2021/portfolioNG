import {Component, OnDestroy, OnInit} from '@angular/core';
import {actualProjectT, futureProjectT} from "../../interfaces/projects";
import {editMode, projectMode} from "../../interfaces/admin";
import {FirebaseService} from "../../services/firebase.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit, OnDestroy {

  projectMode: projectMode | undefined
  editMode: editMode | undefined
  editedActualProject: actualProjectT | undefined
  editedFutureProject: futureProjectT | undefined
  actualFbProjects$: Subscription
  actualProjects: actualProjectT[]
  futureFbProjects$: Subscription
  futureProjects: futureProjectT[]

  constructor(
    public fb: FirebaseService
  ) {
    this.projectMode = undefined;
    this.editMode = undefined;
    this.editedFutureProject = undefined;
    this.actualFbProjects$ = Subscription.EMPTY;
    this.futureFbProjects$ = Subscription.EMPTY;
    this.actualProjects = [];
    this.futureProjects = [];
  }

  ngOnInit(): void {
    this.actualFbProjects$ = this.fb.actualProjectsFb$.subscribe(store => {
      this.actualProjects = store;
      console.log(store)
    });
    this.futureFbProjects$ = this.fb.futureProjectsFb$.subscribe(store => {
      this.futureProjects = store;
      console.log(store);
    })
  }

  setProjectMode(newMode: projectMode) {
    this.projectMode = newMode === this.projectMode ? undefined : newMode;
    this.editMode = undefined;
    this.editedFutureProject = undefined;
    this.editedActualProject = undefined;
  }

  setEditMode(newMode: editMode | undefined) {
    this.editMode = newMode === this.editMode ? undefined : newMode;
    this.editedFutureProject = undefined;
    this.editedActualProject = undefined;
  }

  setEditedActualProject(project: actualProjectT) {
    this.editedActualProject = project.id === this.editedActualProject?.id ? undefined : project;
  }

  setEditedFutureProject(project: futureProjectT) {
    this.editedFutureProject = project.id === this.editedFutureProject?.id ? undefined : project;
  }

  addNewActualProject() {
    if (!this.editedActualProject) return;
    this.fb.addNewActualProject(this.editedActualProject);
  }

  addNewFutureProject() {
    if (!this.editedFutureProject) return;
    this.fb.addNewFutureProject(this.editedFutureProject);
  }

  delActualProjectItem(id: number| string | undefined) {
    this.fb.delActualProject(id)
  }

  delFutureProjectItem(id: number | string | undefined) {
    this.fb.delFutureProject(id);
  }

  ngOnDestroy(): void {
    this.actualFbProjects$.unsubscribe();
    this.futureFbProjects$.unsubscribe();
  }
}
