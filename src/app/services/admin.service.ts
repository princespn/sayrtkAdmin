import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { auth } from  'firebase/firebase-app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase/firebase-app';
import { AngularFirestore } from 'angularfire2/firestore';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  user: User;
 
  constructor(private http:HttpClient,public  afAuth:  AngularFireAuth, public  router:  Router,public afs:AngularFirestore) {
   
    this.afAuth.authState.subscribe(user => {
      if (user){
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    })
   }

   async login(email: string, password: string) {
    var result = await this.afAuth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/list']);
}

async logout(){
  await this.afAuth.signOut();
  localStorage.removeItem('user');
  this.router.navigate(['admin/login']);
}

}
