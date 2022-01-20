import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { finalize } from 'rxjs/operators';
import { EditModelComponent } from '../edit-model/edit-model.component';
import { Feature } from '../models/feature';
import {Model} from '../models/model';
import {ModelService} from '../services/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  modelList:Model[]=[];
  displayedColumns: string[] = ['name_En','name_Ar','edit', 'delete'];
  dataSource = new MatTableDataSource<Model>(this.modelList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
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
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private modelService:ModelService
   
  ) {
    
  }
  isLoading = false;
  ngOnInit(): void {
    this.modelService.models.subscribe(data=>{
      this.modelList=data;
      console.log(data);
      this.conutmodels=data.length;
      this.dataSource=new MatTableDataSource<Model>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  
 

  
  deleteModel(model){
    this.modelService.deletemodel(model);
    this.modelService.models.subscribe(data=>{
      this.modelList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Model>(data);})
      alert('deleted Successful');
  }
  openDialog(model): void {
    const dialogRef = this.dialog.open(EditModelComponent, {
      height: '300px',
      width: '300px',
      data: {model: model}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  
  
}
