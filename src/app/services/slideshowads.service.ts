import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Slideshowads} from '../models/slideshowads';

@Injectable({
  providedIn: 'root'
})
export class SlideshowadsService {
  
  slideshowadsCollection:AngularFirestoreCollection<Slideshowads>;
  slideshowads:Observable<Slideshowads[]>;
  slideshowadsDoc:AngularFirestoreDocument<Slideshowads>;
    constructor(public afs:AngularFirestore) {
      this.slideshowadsCollection=this.afs.collection('SlideshowAds');
      this.slideshowads=this.afs.collection('SlideshowAds').snapshotChanges().pipe(map(changes=>{
        return changes.map(a=>{
          const data=a.payload.doc.data() as Slideshowads;
          data.id=a.payload.doc['id'];
          return data;
        })
      }))
     }
    addfeature(slideshowads:Slideshowads){
  this.slideshowadsCollection.add(slideshowads);
    }
    deletefeature(id){
       this.slideshowadsDoc=this.afs.doc(`SlideshowAds/${id}`);
       this.slideshowadsDoc.delete();
    }
  }
  