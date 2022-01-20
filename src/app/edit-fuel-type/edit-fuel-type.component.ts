import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { FuelType } from '../models/fuel';
import { FuelTypeService } from '../services/fuel-type.service';

@Component({
  selector: 'app-edit-fuel-type',
  templateUrl: './edit-fuel-type.component.html',
  styleUrls: ['./edit-fuel-type.component.css']
})
export class EditFuelTypeComponent implements OnInit {
  conutfuelType;
  fuelType:FuelType={
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
    private fuelTypeService:FuelTypeService,
   
    public dialogRef: MatDialogRef<EditFuelTypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.fuelType=data.fuelType;
    }
  isLoading = false;

  ngOnInit(): void {
  
  }
 

 
  
  
  addfuelType(){
if(this.fuelType.name_En!=""&&this.fuelType.name_En!=""){
  this.fuelType.name_En=this.fuelType.name_En.trim();
  this.fuelType.name_Ar=this.fuelType.name_Ar.trim();
  if(this.fuelType.id==""){
  this.fuelTypeService.addfuelType(this.fuelType);
  this.fuelType.name_En='';
  this.fuelType.name_Ar='';
  alert('Upload Successful');
  this.dialogRef.close();}
  else{
    this.fuelTypeService.updatefuletype(this.fuelType);
    alert('updated Successful');
    this.dialogRef.close();
  }
}

}}