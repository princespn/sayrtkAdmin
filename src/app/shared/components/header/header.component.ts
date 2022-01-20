import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output() togglesidebarforme: EventEmitter<any>=new EventEmitter();
  constructor(private adminservice:AdminService,private toastr:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
togglesidebar(){
this.togglesidebarforme.emit();
}
logout(){
  this.adminservice.logout();
  this.toastr.success(' You have signed out successfully ');
  this.router.navigateByUrl('/');
  (err) => {
   this.toastr.error(err.error);
  }

    }
}
