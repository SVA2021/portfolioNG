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
  isActualProjectModalOpen: number | string | undefined
  isFutureProjectModalOpen: number | string | undefined

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
    this.isActualProjectModalOpen = undefined;
    this.isFutureProjectModalOpen = undefined;
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
    this.editedActualProject = project;
  }

  setEditedFutureProject(project: futureProjectT) {
    this.editedFutureProject = project;
  }

  handleActualProject() {
    if (!this.editedActualProject || !this.editMode) return;
    if (this.editMode === 'new') {
      this.fb.addNewActualProject(this.editedActualProject)
        .catch(e => console.log(e))
        .finally(() => this.editedActualProject = undefined)
    } else {
      this.fb.updActualProject(this.editedActualProject)
        .finally(() => this.editedActualProject = undefined)
    }
  }

  handleFutureProject() {
    if (!this.editedFutureProject || !this.editMode) return;
    if (this.editMode === 'new') {
      this.fb.addNewFutureProject(this.editedFutureProject)
        .catch(e => console.log(e))
        .finally(() => this.editedFutureProject = undefined)
    } else {
      this.fb.updFutureProject(this.editedFutureProject)
        .finally(() => this.editedFutureProject = undefined)
    }
  }

  delActualProjectWithConfirm(action: 'yes' | 'no') {
    if (action === 'yes') {
      this.fb.delActualProject(this.isActualProjectModalOpen)
        .catch(e => console.log(e))
    }
    this.isActualProjectModalOpen = undefined;
  }

  delFutureProjectWithConfirm(action: 'yes' | 'no') {
    if (action === 'yes') {
      this.fb.delFutureProject(this.isFutureProjectModalOpen)
        .catch(e => console.log(e))
    }
    this.isFutureProjectModalOpen = undefined;
  }

  delActualProjectItem(id: number | string | undefined) {
    this.isActualProjectModalOpen = id;
  }

  delFutureProjectItem(id: number | string | undefined) {
    this.isFutureProjectModalOpen = id;
  }

  ngOnDestroy(): void {
    this.actualFbProjects$.unsubscribe();
    this.futureFbProjects$.unsubscribe();
  }
}
