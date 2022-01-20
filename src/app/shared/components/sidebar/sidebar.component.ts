import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import {Admin} from 'src/app/models/admin'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  admin:Admin;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {

  
  }

}
