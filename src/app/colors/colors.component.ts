import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AngularFireStorage } from 'angularfire2/storage';
import { ToastrService } from 'ngx-toastr';
import { EditColorComponent } from '../edit-color/edit-color.component';
import {Color} from '../models/color';
import {ColorService} from '../services/color.service';
@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {

  colorList:Color[]=[];
  displayedColumns: string[] = ['name_En','name_Ar','edit', 'delete'];
  dataSource = new MatTableDataSource<Color>(this.colorList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
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
  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router,
    private af:AngularFireStorage,
    private colorService:ColorService
   
  ) {
    
  }
  isLoading = false;

  ngOnInit(): void {
    this.colorService.colors.subscribe(data=>{
      this.colorList=data;
      console.log(data);
      this.conutcolors=data.length;
      this.dataSource=new MatTableDataSource<Color>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(color): void {
    const dialogRef = this.dialog.open(EditColorComponent, {
      height: '300px',
      width: '300px',
      data: {color: color}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
 
  deletecolor(color){
    this.colorService.deletecolor(color);
    this.colorService.colors.subscribe(data=>{
      this.colorList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Color>(data);})
      alert('deleted Successful');
  }
  
  
}
