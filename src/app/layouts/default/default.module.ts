import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {DashboardComponent} from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule, Router } from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatSortModule} from '@angular/material/sort';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from'@angular/material/input'
import {UserstableComponent} from '../../modules/userstable/userstable.component';
import {AdminseetingsComponent} from '../../modules/adminseetings/adminseetings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from 'src/app/login/login.component';
import {ToastrModule} from 'ngx-toastr'

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AdsComponent } from '../../ads/ads.component';
import { AdstableComponent } from '../../adstable/adstable.component';
import {  AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';
import {AngularFirestore} from '@angular/fire/firestore';
import { AdsService } from 'src/app/services/ads.service';
import { BrandComponent } from '../../brand/brand.component';
import { ModelComponent } from '../../model/model.component';
import { ColorsComponent } from '../../colors/colors.component';
import { TransmitiontypeComponent } from '../../transmitiontype/transmitiontype.component';
import { FueltypeComponent } from '../../fueltype/fueltype.component';
import { FeaturesComponent } from '../../features/features.component';
import { SlideshowadsComponent } from '../../slideshowads/slideshowads.component';
import { EstimateComponent } from '../../estimateapprove/estimateapprove.component';
import {MatDialogModule} from '@angular/material/dialog';
import { EditBrandComponent } from '../../edit-brand/edit-brand.component';
import { EditModelComponent } from '../../edit-model/edit-model.component';
import { EditColorComponent } from '../../edit-color/edit-color.component';
import { EditTransmitionComponent } from '../../edit-transmition/edit-transmition.component';
import { EditFuelTypeComponent } from '../../edit-fuel-type/edit-fuel-type.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    UserstableComponent,
    AdsComponent,
    EstimateComponent,
    AdstableComponent,
    AdminseetingsComponent,
    EditModelComponent,
    EditTransmitionComponent,
    EditColorComponent,
    EditFuelTypeComponent,
 LoginComponent,
 BrandComponent,
    ModelComponent,
    ColorsComponent,
    TransmitiontypeComponent,
    FueltypeComponent,
    FeaturesComponent,
    SlideshowadsComponent,
EditBrandComponent
 


    ],
    entryComponents: [
      EditBrandComponent,
      EditModelComponent,
      EditTransmitionComponent,
      EditColorComponent,
      EditFuelTypeComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
    



  ],
  providers: [UserService,AngularFirestore,AdsService],
})
export class DefaultModule { }
