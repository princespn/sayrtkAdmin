import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FuelType} from '../models/fuel';
@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {
  fuelTypeCollection:AngularFirestoreCollection<FuelType>;
  fuelTypes:Observable<FuelType[]>;
  fuelTypeDoc:AngularFirestoreDocument<FuelType>;
    constructor(public afs:AngularFirestore) {
      this.fuelTypeCollection=this.afs.collection('fuelTypes');
      this.fuelTypes=this.afs.collection('fuelTypes').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as FuelType;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addfuelType(fuelType:FuelType){
  this.fuelTypeCollection.add(fuelType);
    }
    deletefuelType(id){
       this.fuelTypeDoc=this.afs.doc(`fuelTypes/${id}`);
       this.fuelTypeDoc.delete();
    }
    updatefuletype(fueltype){
      this.fuelTypeDoc=this.afs.doc(`fuelTypes/${fueltype.id}`);
      this.fuelTypeDoc.update(fueltype);
    }
  }