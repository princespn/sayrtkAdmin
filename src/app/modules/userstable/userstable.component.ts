import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';
import { SelectionModel } from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import {Users} from 'src/app/models/users';
import { ToastrService } from 'ngx-toastr';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userstable',
  templateUrl: './userstable.component.html',
  styleUrls: ['./userstable.component.css']
})
export class UserstableComponent implements OnInit {
 
  usersdata:any= [];
  initialSelection = [];
  allowMultiSelect = true;
  dataSource: MatTableDataSource<Users>;
selection = new SelectionModel(this.allowMultiSelect, this.initialSelection);
 displayedColumns: string[] = ['name','location','phone_no', 'email'];


 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) sort: MatSort;
 constructor(public userservice:UserService){ }
 ngOnInit() {
 this.userservice.getusers().subscribe(data=>{this.usersdata=data;
  this.dataSource = new MatTableDataSource<Users>(this.usersdata);
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


  

 

 
}


