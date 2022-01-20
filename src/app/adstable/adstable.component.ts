import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Ads } from '../models/ads';
import { MatDialog } from '@angular/material/dialog';
import { AdsService } from '../services/ads.service';
import {EstimateComponent} from '../estimateapprove/estimateapprove.component';
@Component({
  selector: 'app-adstable',
  templateUrl: './adstable.component.html',
  styleUrls: ['./adstable.component.css']
})
export class AdstableComponent implements OnInit {
  adsdata:any= [];
  id;
  initialSelection = [];
  allowMultiSelect = true;
  dataSource: MatTableDataSource<Ads>;
selection = new SelectionModel(this.allowMultiSelect, this.initialSelection);
 displayedColumns: string[] = ['City','Country','model', 'milage','year','brand','mon','vin','price','est','image','delete','selectest'];


 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;
 constructor(public adsservice:AdsService,
  public dialog: MatDialog){ }
 ngOnInit() {
 this.adsservice.getads().subscribe(data=>{this.adsdata=data;
  
   console.log(this.adsdata.id);
  
  this.dataSource = new MatTableDataSource<Ads>(this.adsdata);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 0);
});

    
}
 
 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected == numRows;
   
 }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 masterToggle() {
   this.isAllSelected() ?
       this.selection.clear() :
       this.dataSource.data.forEach(row => this.selection.select(row));
 }


  
 deletead(event,ad){
   console.log(ad);

 

    this.adsservice.deletead(ad);
 }
 
 getestimates(event,ad){
  console.log(ad);

  const dialogRef = this.dialog.open(EstimateComponent, {
    height: '300px',
    width: '300px',
    data: {model: ad,adsservice:this.adsservice}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   
  });

   this.adsservice.getestimate(ad);
}
 
}