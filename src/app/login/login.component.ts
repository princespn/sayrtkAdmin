import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAction } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),

 });
 isLoading = false;
  constructor(
    private adminservice:AdminService,private router:Router,private toastr: ToastrService,public afs:AngularFirestore) { }

  ngOnInit(): void {
  }
  login(){
    this.isLoading = true;
    const docRef = this.afs.collection('admin').doc('admin').snapshotChanges().subscribe(data=>{
      const dataadmin = data.payload.data() as Admin;
      if(this.form.controls.email.value==dataadmin.email && this.form.controls.password.value==dataadmin.password){
 this.router.navigateByUrl('main')
      }
  else alert('Error in the email or password')




    })
      
  }


    }






