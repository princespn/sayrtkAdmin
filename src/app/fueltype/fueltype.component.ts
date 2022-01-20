import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { EditFuelTypeComponent } from '../edit-fuel-type/edit-fuel-type.component';
import {FuelType} from '../models/fuel';
import { Transmission } from '../models/transmission';
import {FuelTypeService} from '../services/fuel-type.service';
@Component({
  selector: 'app-fueltype',
  templateUrl: './fueltype.component.html',
  styleUrls: ['./fueltype.component.css']
})
export class FueltypeComponent implements OnInit {

  fuelTypeList:FuelType[]= [];
  displayedColumns: string[] = ['name_En','name_Ar','edit', 'delete'];
  dataSource = new MatTableDataSource<FuelType>(this.fuelTypeList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
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
    public dialog: MatDialog,
   
  ) {
    
  }
  isLoading = false;
  openDialog(fuelType): void {
    const dialogRef = this.dialog.open(EditFuelTypeComponent, {
      height: '300px',
      width: '300px',
      data: {fuelType: fuelType}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
  ngOnInit(): void {
    this.fuelTypeService.fuelTypes.subscribe(data=>{
      this.fuelTypeList=data;
      console.log(data);
      this.conutfuelType=data.length;
      this.dataSource=new MatTableDataSource<FuelType>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

 
  
  
 

  
  deletefuelType(fuelType){
    this.fuelTypeService.deletefuelType(fuelType);
    this.fuelTypeService.fuelTypes.subscribe(data=>{
      this.fuelTypeList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<FuelType>(data);})
      alert('deleted Successful');
  }
  
  
}

