import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DefaultModule} from'./layouts/default/default.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {  AngularFirestoreModule } from 'angularfire2/firestore';
import {  AngularFireStorageModule } from 'angularfire2/storage';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from './services/user.service';
import { AdsService } from './services/ads.service';


@NgModule({
  declarations: [
    AppComponent,
   
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    MatTableModule ,
    HttpClientModule,
    AngularFirestoreModule,
    FormsModule ,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule

  ],
  exports: [ RouterModule ],
  providers: [UserService,AngularFirestore,AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
