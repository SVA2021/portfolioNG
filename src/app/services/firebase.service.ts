import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {actualProjectT, futureProjectT} from "../interfaces/projects";
import {projectMode} from "../interfaces/admin";

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  actualProjectsFb$: Observable<actualProjectT[]>
  futureProjectsFb$: Observable<futureProjectT[]>

  constructor(
    private store: AngularFirestore
  ) {
    this.actualProjectsFb$ = this.store.collection('actual').valueChanges({idField: 'id'}) as Observable<actualProjectT[]>;
    this.futureProjectsFb$ = this.store.collection('future').valueChanges({idField: 'id'}) as Observable<futureProjectT[]>;
  }

  private addProject(projectMode: projectMode, project: actualProjectT | futureProjectT) {
    return this.store.firestore.runTransaction(() => this.store.collection(projectMode).add(project))
  }

  private delProject(projectMode: projectMode, id: number | string | undefined) {
    return this.store.firestore.runTransaction(() => this.store.collection(projectMode).doc(String(id)).delete())
  }

  private updProject(projectMode: projectMode, project: actualProjectT | futureProjectT) {
    return this.store.firestore.runTransaction(() => this.store.collection(projectMode).doc(String(project.id)).update(project))
  }

  addNewActualProject(project: actualProjectT) {
    return this.addProject('actual', project);
  }

  addNewFutureProject(project: futureProjectT) {
    return this.addProject('future', project);
  }

  delActualProject(id: number | string | undefined) {
    return this.delProject('actual', id);
  }

  delFutureProject(id: number | string | undefined) {
    return this.delProject('future', id);
  }

  updActualProject(project: actualProjectT) {
    return this.updProject('actual', project);
  }

  updFutureProject(project: futureProjectT) {
    return this.updProject('future', project);
  }


}
