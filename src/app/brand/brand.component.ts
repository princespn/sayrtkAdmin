import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {AngularFireStorage} from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import {Brand} from '../models/brand';
import {BrandService} from '../services/brand.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditBrandComponent } from '../edit-brand/edit-brand.component';
@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brandList:Brand[]=[];
  displayedColumns: string[] = ['name_En','name_Ar','image','edit', 'delete'];
  dataSource = new MatTableDataSource<Brand>(this.brandList);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  conutBrands;
  brand:Brand={
    id:'',
    name_En:"",
    name_Ar:"",
  
    image:""
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
    private brandService:BrandService
   
  ) {
    
  }
  isLoading = false;

  ngOnInit(): void {
    this.brandService.brands.subscribe(data=>{
      this.brandList=data;
      console.log(data);
      this.conutBrands=data.length;
      this.dataSource=new MatTableDataSource<Brand>(data);
          });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  openDialog(brand): void {
    const dialogRef = this.dialog.open(EditBrandComponent, {
      height: '500px',
      width: '500px',
      data: {brand: brand}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });
  }
 

  
  deleteBrand(brand){
    this.brandService.deleteBrand(brand);
    this.brandService.brands.subscribe(data=>{
      this.brandList=data;
      console.log(data);
      this.dataSource=new MatTableDataSource<Brand>(data);})
      alert('deleted Successful');
  }
  
  
}


