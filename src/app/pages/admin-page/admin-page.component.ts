import {Component, OnInit} from '@angular/core';
import {actualProjectT, futureProjectT} from "../../interfaces/projects";
import {editMode, projectMode} from "../../interfaces/admin";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  projectMode: projectMode | undefined
  editMode: editMode | undefined
  editedActualProject: actualProjectT | undefined
  editedFutureProject: futureProjectT | undefined

  constructor() {
    this.projectMode = undefined;
    this.editMode = undefined;
    this.editedFutureProject = undefined;
  }

  ngOnInit(): void {
  }

  setProjectMode(newMode: projectMode) {
    this.projectMode = newMode === this.projectMode ? undefined : newMode;
    this.editMode = undefined;
  }

  setEditMode(newMode: editMode | undefined) {
    this.editMode = newMode === this.editMode ? undefined : newMode;
  }

  setEditedActualProject(project: actualProjectT) {
    this.editedActualProject = project;
  }

  setEditedFutureProject(project: futureProjectT) {
    this.editedFutureProject = project;
  }

}
