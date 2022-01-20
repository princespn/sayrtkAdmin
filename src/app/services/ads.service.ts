import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Ads} from '../models/ads';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdsService {
  
  adsCollection:AngularFirestoreCollection<Ads>;
  items:Observable<Ads[]>;
  itemDoc:AngularFirestoreDocument<Ads>;
  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection('Cars').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Ads;
        data.id=a.payload.doc['id'];
        return data;
      })
    }))
   }
getads(){
  return this.items;
}
deletead(ad){
 
this.itemDoc=this.afs.doc(`Cars/${ad}`);

this.itemDoc.delete();
}

getestimate(ad){
  this.itemDoc=this.afs.doc(`Cars/${ad.id}`);
  this.itemDoc.update(ad);
  }

  setestimate(ad){

    
  console.log(ad);
  this.itemDoc=this.afs.doc(`Cars/${ad.id}`);
  this.itemDoc.update(ad);
  }

}