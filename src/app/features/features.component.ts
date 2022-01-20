import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import {Feature} from '../models/feature';
import {Icon} from '../models/icon';
import {FeatureService} from '../services/feature.service';
@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  featureList=[];
  displayedColumns: string[] = ['name','name_ar','icon','icon_file', 'delete'];
  dataSource = new MatTableDataSource<Feature>(this.featureList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  conutfeatures;
  feature:Feature={
    id:'',
    name:"",
    name_ar:"",
    icon_file:null,
    icon:0
    
   
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
    private featureService:FeatureService
   
  ) {
    
  }
  isLoading = false;

  ngOnInit(): void {
    this.featureService.features.subscribe(data=>{
      this.featureList=data;
      console.log(data);
      this.conutfeatures=data.length;
      this.dataSource=new MatTableDataSource<Feature>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  icons:Icon[]=[
    {icon:'ac_unit',codePoint:57399},
  {icon:'vpn_key',codePoint:59079},
  {icon:'swap_horizontal_circle',codePoint:58918},
  {icon:'lightbulb_outline',codePoint:58236},
  {icon:'wb_iridescent',codePoint:59094},
  {icon:'local_parking'   ,codePoint:58269},
  {icon:'event_seat',codePoint:57922},
{icon:'power_input',codePoint:58593},
{icon:'highlight',codePoint:58128},
{icon:'camera'   ,codePoint:57647},
{icon:'navigation'   ,codePoint:58398,
},{icon:'control_point_duplicate',codePoint:57750},
{icon:'airline_seat_legroom_normal'   ,codePoint:57449},
{icon:'settings_bluetooth'   ,codePoint:58755},
{icon:'panorama_wide_angle'   ,codePoint:58485},
{icon:'settings'   ,codePoint:58751},
{icon:'settings_input_antenna'   ,codePoint:58759},
{icon:'control_camera'   ,codePoint:57748},
,{icon:'hd'   ,codePoint:58100}];
 
  addfeature(){
if(this.feature.name!=""&&this.feature.name_ar!=""&&(this.feature.icon!=0||this.feature.icon_file!=null)){
  this.feature.name=this.feature.name.trim();
  this.feature.name_ar=this.feature.name_ar.trim();
  this.featureService.addfeature(this.feature);
  this.feature.name='';
  alert('Upload Successful');
}}
Upload(event){
    
  this.pathvalue=true;
this.path=event.target.files[0];
this.name='/features'+Math.random()+event.target.files[0].name
this.fileRef=this.af.ref(this.name);
var reder=new FileReader();
reder.readAsDataURL(event.target.files[0]);
reder.onload=(events:any)=>{
 this.urltoshow=events.target.result;
 this.feature.icon_file=events.target.result;
}
}
UploadImage(){
  if(this.pathvalue==true){
var u=  this.af.upload(this.name,this.path).snapshotChanges().pipe(
  finalize(() => {
   this.fileRef.getDownloadURL().subscribe((url) => {
      this.feature.icon_file = url;
      this.addfeature();
      
    })
  })
).subscribe();}
else{this.addfeature()}
}
  deletefeature(feature){
    this.featureService.deletefeature(feature);
    this.featureService.features.subscribe(data=>{
      this.featureList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Feature>(data);})
      alert('deleted Successful');
  }
  
  
}


