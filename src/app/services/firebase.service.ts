import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {actualProjectT, futureProjectT} from "../interfaces/projects";

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

  addNewActualProject(project: actualProjectT) {
    this.store.firestore.runTransaction(() => this.store.collection('actual').add(project))
  }

  addNewFutureProject(project: futureProjectT) {
    this.store.firestore.runTransaction(() => this.store.collection('future').add(project))
  }

  delActualProject(id: number | string | undefined) {
    this.store.firestore.runTransaction(() => this.store.collection('actual').doc(String(id)).delete())
  }

  delFutureProject(id: number | string | undefined) {
    this.store.firestore.runTransaction(() => this.store.collection('future').doc(String(id)).delete())
  }


}
