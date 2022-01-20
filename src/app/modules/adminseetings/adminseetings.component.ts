import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';
import {Admin} from 'src/app/models/admin'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-adminseetings',
  templateUrl: './adminseetings.component.html',
  styleUrls: ['./adminseetings.component.css']
})

export class AdminseetingsComponent implements OnInit {
  admin:Admin;
  image;
  form4;
  isLoading=false;
  imagefile:File;
  @ViewChild('image') user_image
  form2 = new FormGroup({
    stripe_pk_test: new FormControl('', Validators.required),
    stripe_sk_test: new FormControl('', Validators.required),
    stripe_sk_alive: new FormControl('', Validators.required),
    stripe_pk_alive: new FormControl('', Validators.required),
 });
 form3 = new FormGroup({
  firstname: new FormControl('', Validators.required),
  lastname: new FormControl('', Validators.required),
  email: new FormControl('', Validators.required),
  phone: new FormControl('', Validators.required),
});
  constructor(public afs:AngularFirestore,public  afAuth:  AngularFireAuth,private adminservice:AdminService,private router:Router ,private toastr:ToastrService ,private fb:FormBuilder) {
    this.form4=this.fb.group({
      'email':['',Validators.required],
    });}
      
  


  ngOnInit(): void {
    const docRef = this.afs.collection('admin').doc('admin').snapshotChanges().subscribe(data=>{
      const dataadmin = data.payload.data() as Admin;
    const dataadminfirst=dataadmin.email;
      console.log(dataadmin.email);


this.form3.controls.email.setValue(dataadmin.email);
this.form3.controls.firstname.setValue(dataadmin.firstname);
this.form3.controls.lastname.setValue(dataadmin.lastname);
this.form3.controls.phone.setValue(dataadmin.phone);

    })
    
 
  }
  get fc(){
    return this.form4.controls;
  }
  confirmPasswordMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      // console.log(controlName, matchingControlName)
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmPasswordMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
resetpass(){

}
saveadmininfo(){
const itemdoc=this.afs.collection('admin').doc('admin');
itemdoc.update({
  'firstname':this.form3.controls.firstname.value,
  "lastname":this.form3.controls.lastname.value,
  "phone":this.form3.controls.phone.value,
  "email":this.form3.controls.email.value
});
this.toastr.success('successfully saved');
}
async sendPasswordResetEmail() {
  return await this.afAuth.sendPasswordResetEmail(this.form4.controls.email.value)
}

  }




