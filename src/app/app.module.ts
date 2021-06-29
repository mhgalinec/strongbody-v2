import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CreateMemberComponent } from './members/create-member/create-member.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { UpdateMemberComponent } from './members/update-member/update-member.component';
import { AppRoutingModule } from './app-routing.module';
import { ShowMembershipComponent } from './membership/show-membership/show-membership.component';
import { MembershipListComponent } from './membership/membership-list/membership-list.component';
import { UpdateMembershipComponent } from './membership/update-membership/update-membership.component';
import { CreateMembershipComponent } from './membership/create-membership/create-membership.component';
import { ShowMeasurementsComponent } from './measurements/show-measurements/show-measurements.component';
import { CreateMeasurementComponent } from './measurements/create-measurement/create-measurement.component';
import { UpdateMeasurementComponent } from './measurements/update-measurement/update-measurement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { ConfirmationDialog } from './dialogs/confirmation-dialog.element';
import { DialogElement } from './dialogs/dialog.element';
import { CreateEquipmentComponent } from './equipment/create-equipment/create-equipment.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { UpdateEquipmentComponent } from './equipment/update-equipment/update-equipment.component';
import { CreateScheduledServiceComponent } from './scheduled_services/create-scheduled-service/create-scheduled-service.component';
import { UpdateScheduledServiceComponent } from './scheduled_services/update-scheduled-service/update-scheduled-service.component';
import { ShowScheduledServiceComponent } from './scheduled_services/show-scheduled-services/show-scheduled-service.component';
import { CreateUnplannedServiceComponent } from './unplanned_services/create-unplanned-service/create-unplanned-service.component';
import { ShowUnplannedServicesComponent } from './unplanned_services/show-unplanned-services/show-unplanned-services.component';
import { UpdateUnplannedServiceComponent } from './unplanned_services/update-unplanned-service/update-unplanned-service.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMemberComponent,
    MemberListComponent,
    UpdateMemberComponent,
    ShowMembershipComponent,
    MembershipListComponent,
    UpdateMembershipComponent,
    CreateMembershipComponent,
    ShowMeasurementsComponent,
    CreateMeasurementComponent,
    UpdateMeasurementComponent,
    NumbersOnlyDirective,
	  ConfirmationDialog,
	  DialogElement,
	  CreateEquipmentComponent,
	  EquipmentListComponent,
	  UpdateEquipmentComponent,
	  CreateScheduledServiceComponent,
	  UpdateScheduledServiceComponent,
	  ShowScheduledServiceComponent,
	  CreateUnplannedServiceComponent,
	  ShowUnplannedServicesComponent,
	  UpdateUnplannedServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
