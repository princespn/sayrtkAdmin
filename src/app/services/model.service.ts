import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Model } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  modelCollection:AngularFirestoreCollection<Model>;
  models:Observable<Model[]>;
  modelDoc:AngularFirestoreDocument<Model>;
    constructor(public afs:AngularFirestore) {
      this.modelCollection=this.afs.collection('models');
      this.models=this.afs.collection('models').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Model;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addmodel(model:Model){
  this.modelCollection.add(model);
    }
    deletemodel(id){
       this.modelDoc=this.afs.doc(`models/${id}`);
       this.modelDoc.delete();
    }
    updatemodel(model){
      this.modelDoc=this.afs.doc(`models/${model.id}`);
      this.modelDoc.update(model);
  
    }
  }