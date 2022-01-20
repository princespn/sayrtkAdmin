import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  colorCollection:AngularFirestoreCollection<Color>;
  colors:Observable<Color[]>;
  colorDoc:AngularFirestoreDocument<Color>;
    constructor(public afs:AngularFirestore) {
      this.colorCollection=this.afs.collection('colors');
      this.colors=this.afs.collection('colors').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Color;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addcolor(color:Color){
  this.colorCollection.add(color);
    }
    deletecolor(id){
       this.colorDoc=this.afs.doc(`colors/${id}`);
       this.colorDoc.delete();
    }
    updatecolor(color){
      this.colorDoc=this.afs.doc(`colors/${color.id}`);
      this.colorDoc.update(color);
  
    }
  }