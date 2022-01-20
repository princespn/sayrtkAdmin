import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Users } from '../models/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
usersCollection:AngularFirestoreCollection<Users>;
items:Observable<Users[]>;
  constructor(public afs:AngularFirestore) {
    this.items=this.afs.collection('users').valueChanges();
   }
getusers(){
  return this.items;
}
}
