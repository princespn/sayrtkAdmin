import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Transmission} from '../models/transmission'
@Injectable({
  providedIn: 'root'
})
export class TransmissionService {

  transmissionCollection:AngularFirestoreCollection<Transmission>;
  transmissions:Observable<Transmission[]>;
  transmissionDoc:AngularFirestoreDocument<Transmission>;
    constructor(public afs:AngularFirestore) {
      this.transmissionCollection=this.afs.collection('transmissions');
      this.transmissions=this.afs.collection('transmissions').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Transmission;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addtransmission(transmission:Transmission){
  this.transmissionCollection.add(transmission);
    }
    deletetransmission(id){
       this.transmissionDoc=this.afs.doc(`transmissions/${id}`);
       this.transmissionDoc.delete();
    }
    updateTransmition(transmition){
      this.transmissionDoc=this.afs.doc(`transmissions/${transmition.id}`);
      this.transmissionDoc.update(transmition);
    }
  }