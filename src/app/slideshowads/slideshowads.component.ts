import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import {Slideshowads} from '../models/slideshowads';
import { FuelType } from '../models/fuel';
import {Icon} from '../models/icon';
import { Transmission } from '../models/transmission';
import {SlideshowadsService} from '../services/slideshowads.service';
@Component({
  selector: 'app-features',
  templateUrl: './slideshowads.component.html',
  styleUrls: ['./slideshowads.component.css']
})
export class SlideshowadsComponent implements OnInit {

  slideshowadsList=[];
  displayedColumns: string[] = ['image','link','delete'];
  dataSource = new MatTableDataSource<Slideshowads>(this.slideshowadsList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  countslideshowads;
  slideshowads:Slideshowads={
    id:'',
    image:null,
    link:"",   
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
    private slideshowadsService:SlideshowadsService
   
  ) {
    
  }
  isLoading = false;

  ngOnInit(): void {
    this.slideshowadsService.slideshowads.subscribe(data=>{
      this.slideshowadsList=data;
      console.log(data);
      this.countslideshowads=data.length;
      this.dataSource=new MatTableDataSource<Slideshowads>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  addfeature(){
if(this.slideshowads.link!=""&&this.slideshowads.image!=null){
  this.slideshowads.link=this.slideshowads.link.trim();
  this.slideshowadsService.addfeature(this.slideshowads);
  this.slideshowads.link='';
  alert('Upload Successful');
}}
Upload(event){
    
  this.pathvalue=true;
this.path=event.target.files[0];
this.name='/SlideshowAds'+Math.random()+event.target.files[0].name
this.fileRef=this.af.ref(this.name);
var reder=new FileReader();
reder.readAsDataURL(event.target.files[0]);
reder.onload=(events:any)=>{
 this.urltoshow=events.target.result;
 this.slideshowads.image=events.target.result;
}
}
UploadImage(){
  if(this.pathvalue==true){
var u=  this.af.upload(this.name,this.path).snapshotChanges().pipe(
  finalize(() => {
   this.fileRef.getDownloadURL().subscribe((url) => {
      this.slideshowads.image = url;
      this.addfeature();
      
    })
  })
).subscribe();}
else{this.addfeature()}
}
  deletefeature(feature){
    this.slideshowadsService.deletefeature(feature);
    this.slideshowadsService.slideshowads.subscribe(data=>{
      this.slideshowadsList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Slideshowads>(data);})
      alert('deleted Successful');
  }
  
  
}


