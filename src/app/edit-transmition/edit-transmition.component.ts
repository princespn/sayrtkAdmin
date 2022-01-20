import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { Transmission } from '../models/transmission';
import { TransmissionService } from '../services/transmission.service';

@Component({
  selector: 'app-edit-transmition',
  templateUrl: './edit-transmition.component.html',
  styleUrls: ['./edit-transmition.component.css']
})
export class EditTransmitionComponent implements OnInit {

 
  conuttransmission;
  transmission:Transmission={
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
    private transmissionService:TransmissionService,
   
    public dialogRef: MatDialogRef<EditTransmitionComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.transmission=data.transmission;
    }
  isLoading = false;

  ngOnInit(): void {
 
 
    
  }
 



  
  
  addtransmission(){
if(this.transmission.name_En!=""&&this.transmission.name_Ar!=""){
  this.transmission.name_En=this.transmission.name_En.trim();
  this.transmission.name_Ar=this.transmission.name_Ar.trim();
  if(this.transmission.id==""){
  this.transmissionService.addtransmission(this.transmission);
  this.transmission.name_En='';
  this.transmission.name_Ar='';
  alert('Upload Successful');
  
        this.dialogRef.close();}
  else{
    this.transmissionService.updateTransmition(this.transmission);
    alert('Update Successful');
    this.dialogRef.close();
  }
}

  }}