import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-edit-brand',
  templateUrl: './edit-brand.component.html',
  styleUrls: ['./edit-brand.component.css']
})
export class EditBrandComponent implements OnInit {
  path:string;
  form: FormGroup;
  name:string;
  fileRef;
  url:string;
  pathvalue=false;
  urltoshow="";
 
  isLoading = false;
  
  brand:Brand;
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private brandService:BrandService,
    
    public dialogRef: MatDialogRef<EditBrandComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
      this.brand=data.brand;
      console.log(data.brand);
      
    }
 

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {

  }
  Upload(event){
    
    this.pathvalue=true;
 this.path=event.target.files[0];
 this.name='/brands'+Math.random()+event.target.files[0].name
 this.fileRef=this.af.ref(this.name);
 var reder=new FileReader();
 reder.readAsDataURL(event.target.files[0]);
 reder.onload=(events:any)=>{
   this.urltoshow=events.target.result;
   this.brand.image=events.target.result;
 }
 
   }
   UploadImage(){
     if(this.pathvalue==true){
   var u=  this.af.upload(this.name,this.path).snapshotChanges().pipe(
     finalize(() => {
      this.fileRef.getDownloadURL().subscribe((url) => {
         this.brand.image = url;
         this.AddBrand(url);
         
       })
     })
   ).subscribe();}
   else{this.AddBrand("url")}
   }
  AddBrand(url){
   
 if(this.brand.name_En!=""&&this.brand.name_Ar!=""&&   this.brand.image!=null){
   this.brand.name_En=this.brand.name_En.trim();
   this.brand.name_Ar=this.brand.name_Ar.trim();
   this.brand.image=this.brand.image;
   if(this.brand.id==""){
   this.brandService.addBrand(this.brand);
   this.brand.name_En='';
   alert('Upload Successful');
 }else{
  this.brandService.updateBrand(this.brand);
 }
 this.dialogRef.close();
}}
 
}