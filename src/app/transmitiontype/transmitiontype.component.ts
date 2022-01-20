import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import {TransmissionService} from '../services/transmission.service';
import {Transmission} from '../models/transmission';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditTransmitionComponent } from '../edit-transmition/edit-transmition.component';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-transmitiontype',
  templateUrl: './transmitiontype.component.html',
  styleUrls: ['./transmitiontype.component.css']
})
export class TransmitiontypeComponent implements OnInit {
  transmissionList:Transmission[]= [];
  displayedColumns: string[] = ['name_En','name_Ar','edit', 'delete'];
  dataSource = new MatTableDataSource<Transmission>(this.transmissionList);

  @ViewChild(MatPaginator) paginator: MatPaginator;

 
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
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private transmissionService:TransmissionService
   
  ) {
    
  }
  isLoading = false;

  ngOnInit(): void {
    this.transmissionService.transmissions.subscribe(data=>{
this.transmissionList=data;
console.log(data);
this.conuttransmission=data.length;
this.dataSource=new MatTableDataSource<Transmission>(data);
    });
    
  }
 
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  
  

  deletetransmission(transmission){
    this.transmissionService.deletetransmission(transmission);
    this.transmissionService.transmissions.subscribe(data=>{
      this.transmissionList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Transmission>(data);})
      alert('deleted Successful');
  }
  
  openDialog(transmission): void {
    const dialogRef = this.dialog.open(EditTransmitionComponent, {
      height: '300px',
      width: '300px',
      data: {transmission: transmission}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
}

