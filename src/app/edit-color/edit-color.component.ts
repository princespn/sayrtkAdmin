import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
import { Color } from '../models/color';
import { ColorService } from '../services/color.service';

@Component({
  selector: 'app-edit-color',
  templateUrl: './edit-color.component.html',
  styleUrls: ['./edit-color.component.css']
})
export class EditColorComponent implements OnInit {
  conutcolors;
  color:Color={
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
  constructor(  public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private colorService:ColorService,
    public dialogRef: MatDialogRef<EditColorComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { 
      this.color=data.color;
    }

  ngOnInit(): void {
  }
 
   
   
   addcolor(){
 if(this.color.name_En!=""&&this.color.name_Ar!=""){
   if(this.color.id==""){
   this.color.name_En=this.color.name_En.trim();
   this.color.name_Ar=this.color.name_Ar.trim();
   this.colorService.addcolor(this.color);
   alert('Upload Successful');
   this.dialogRef.close();}
   else{
     this.colorService.updatecolor(this.color);
     alert('Update Successful');
     this.dialogRef.close();
   }
   this.color.name_En='';
   this.color.name_Ar='';


   
 }
 
   }
}
