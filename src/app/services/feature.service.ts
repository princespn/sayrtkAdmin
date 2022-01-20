import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {
  
  featureCollection:AngularFirestoreCollection<Feature>;
  features:Observable<Feature[]>;
  featureDoc:AngularFirestoreDocument<Feature>;
    constructor(public afs:AngularFirestore) {
      this.featureCollection=this.afs.collection('features');
      this.features=this.afs.collection('features').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Feature;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addfeature(feature:Feature){
  this.featureCollection.add(feature);
    }
    deletefeature(id){
       this.featureDoc=this.afs.doc(`features/${id}`);
       this.featureDoc.delete();
    }
  }
  