import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Brand} from '../models/brand';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BrandService {
brandCollection:AngularFirestoreCollection<Brand>;
brands:Observable<Brand[]>;
brandDoc:AngularFirestoreDocument<Brand>;
  constructor(public afs:AngularFirestore) {
    this.brandCollection=this.afs.collection('brands');
    this.brands=this.afs.collection('brands').snapshotChanges().pipe(map(changes=>{
      return changes.map(a=>{
        const data=a.payload.doc.data() as Brand;
        data.id=a.payload.doc['id'];
        return data;
      })
    }))
   }
  addBrand(brand:Brand){
this.brandCollection.add(brand);
  }
  deleteBrand(id){
     this.brandDoc=this.afs.doc(`brands/${id}`);
     this.brandDoc.delete();
  }
  updateBrand(brand){
    this.brandDoc=this.afs.doc(`brands/${brand.id}`);
    this.brandDoc.update(brand);

  }
}
