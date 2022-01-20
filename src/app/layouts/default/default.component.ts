import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
sidebaropen=true;


@ViewChild('drawer') drawer: any;
public selectedItem : string = '';
 public isHandset$: Observable<boolean> = this.breakpointObserver
   .observe(Breakpoints.Handset)
   .pipe(map((result: BreakpointState) => result.matches));
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }
  sidebartoggler(){
    this.sidebaropen=!this.sidebaropen;
  }
  closeSideNav() {
    if (this.drawer._mode=='over') {
      this.drawer.close();
    }}

}
