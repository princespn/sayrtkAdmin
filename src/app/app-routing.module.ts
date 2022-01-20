import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AdsComponent } from './ads/ads.component';
import { DefaultComponent } from './layouts/default/default.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { AdminseetingsComponent } from './modules/adminseetings/adminseetings.component';
import { BrandComponent } from './brand/brand.component';
import { ModelComponent } from './model/model.component';
import { ColorsComponent } from './colors/colors.component';
import { TransmitiontypeComponent } from './transmitiontype/transmitiontype.component';
import { FueltypeComponent } from './fueltype/fueltype.component';
import { FeaturesComponent } from './features/features.component';
import { SlideshowadsComponent } from './slideshowads/slideshowads.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'main',component:DefaultComponent,
  children:
  [
    {path:'',component:DashboardComponent},
    {path:'ads',component:AdsComponent},
    {path:'admin',component:AdminseetingsComponent},
    {path:'brand',component:BrandComponent},
    {path:'model',component:ModelComponent},
    {path:'color',component:ColorsComponent},
    {path:'transmition',component:TransmitiontypeComponent},
    {path:'fuel',component:FueltypeComponent},
    {path:'feature',component:FeaturesComponent},
    {path:'slideshow',component:SlideshowadsComponent},
    
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    FormsModule ,
    BrowserModule,
    RouterModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
