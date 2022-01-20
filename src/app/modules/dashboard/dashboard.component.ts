import { Component, OnInit, ViewChild } from '@angular/core';

import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  conutusers;
  countspace;
  parkingarea;
  
 constructor(private toastr:ToastrService,private userservice:UserService){}



  ngOnInit() {
 
    this.userservice.getusers().subscribe(data=>{this.conutusers=data.length;
    console.log(data.length);
    });
 

  }
  // deletefacility(id){
  //   this.facilitiesservice.deletefacility(id).subscribe((data:any)=>{
  //     this.facilities =  this.facilities.filter(t=>t.id != id)
  //         this.facilitiesservice.getFacilities().subscribe((data:any) => {
  //           this.facilities = data;
  //           this.toastr.success('successfully Deleted');
  //          },
  //          (err) => {
  //            this.toastr.error(err.error);

  //         });
  //   })
  //     }


}




