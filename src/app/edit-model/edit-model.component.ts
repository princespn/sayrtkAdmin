import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { Model } from '../models/model';
import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-edit-model',
  templateUrl: './edit-model.component.html',
  styleUrls: ['./edit-model.component.css']
})
export class EditModelComponent implements OnInit {

  conutmodels;
  model:Model={
    id:'',
    name_En:"",
    name_Ar:"",
   
  }
  
  path:string;
  form: FormGroup;
  name:string;
  fileRef;
  url:string;
  pathvalue=false;
  urltoshow="";
  constructor(
    
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private modelService:ModelService,
    public dialogRef: MatDialogRef<EditModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.model=data.model;
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isLoading = false;
   
  addmodel(){
    if(this.model.name_En!=""&&this.model.name_Ar!=""){
      this.model.name_En=this.model.name_En.trim();
      this.model.name_Ar=this.model.name_Ar.trim();
      if(this.model.id==""){
      this.modelService.addmodel(this.model);
      this.model.name_En='';
      this.model.name_Ar='';
      alert('Upload Successful');
      this.dialogRef.close();}
      else{
        this.modelService.updatemodel(this.model);
        alert('Update Successful');
        this.dialogRef.close();
      }
    }}}