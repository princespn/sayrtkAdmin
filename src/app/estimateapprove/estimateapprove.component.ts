import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { Estimate } from '../models/estimates';
import { ModelService } from '../services/model.service';
import { AdsService } from '../services/ads.service';

@Component({
  selector: 'app-estimateapprove',
  templateUrl: './estimateapprove.component.html',
  styleUrls: ['./estimateapprove.component.css']
})
export class EstimateComponent implements OnInit {

  conutmodels;
  model:object=[]
  
  path:string;
  form: FormGroup;
  name:string;
  fileRef;
  url:string;
  pathvalue=false;
  urltoshow="";
  adsservice:AdsService;

  constructor(
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private modelService:ModelService,
    public dialogRef: MatDialogRef<EstimateComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.model=data.model;
      this.adsservice=data.adsservice;
    }
  ngOnInit(): void {
    
    var aa=  document.getElementById('estdropdown');
    
    var opt = document.createElement('option');
    opt.value = '0';
    opt.innerHTML = 'select';
    aa['value']=opt.value;
    aa.appendChild(opt);
    this.model['estlist'].forEach(element => {
     console.log(element['approved']);
     



    opt = document.createElement('option');
    opt.value = element['userid'];
    opt.innerHTML = element['estimate'];
    
    aa.appendChild(opt);


    if(element['approved']===true){
      aa['value']=opt.value;
    }
    });
  }

  isLoading = false;
   
  approveest(ad){
    // if(this.model.name_En!=""&&this.model.name_Ar!=""){
    //   this.model.name_En=this.model.name_En.trim();
    //   this.model.name_Ar=this.model.name_Ar.trim();
    //   if(this.model.id==""){
    //   this.modelService.addmodel(this.model);
    //   this.model.name_En='';
    //   this.model.name_Ar='';
    //   alert('Upload Successful');
    //   this.dialogRef.close();}
    //   else{
    //     this.modelService.updatemodel(this.model);
    //     alert('Update Successful');
    //     this.dialogRef.close();
    //   }
    // }
    console.log(ad);
    console.log('----------------');
    var aa=  document.getElementById('estdropdown');
    console.log(aa['value']);
        
    var opt = document.createElement('option');
    this.model['estlist'].forEach(element => {
           
       console.log(aa['value']);
       element['approved']=false;
     if(aa['value']===element['userid']){
       console.log("prashant");
      element['approved']=true;
     }
     });


     
   this.adsservice.getestimate(ad);
  //this.itemDoc.update(ad);

  }
}