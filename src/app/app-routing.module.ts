import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './members/member-list/member-list.component';
import { CreateMemberComponent } from './members/create-member/create-member.component';
import { UpdateMemberComponent } from './members/update-member/update-member.component';
import { ShowMembershipComponent } from './membership/show-membership/show-membership.component';
import { MembershipListComponent } from './membership/membership-list/membership-list.component';
import { UpdateMembershipComponent } from './membership/update-membership/update-membership.component';
import { CreateMembershipComponent } from './membership/create-membership/create-membership.component';
import { ShowMeasurementsComponent } from './measurements/show-measurements/show-measurements.component';
import { CreateMeasurementComponent } from './measurements/create-measurement/create-measurement.component';
import { UpdateMeasurementComponent } from './measurements/update-measurement/update-measurement.component';
import { EquipmentListComponent } from './equipment/equipment-list/equipment-list.component';
import { UpdateEquipmentComponent } from './equipment/update-equipment/update-equipment.component';
import { CreateEquipmentComponent } from './equipment/create-equipment/create-equipment.component';
import { ShowScheduledServiceComponent } from './scheduled_services/show-scheduled-services/show-scheduled-service.component';
import { UpdateScheduledServiceComponent } from './scheduled_services/update-scheduled-service/update-scheduled-service.component';
import { CreateScheduledServiceComponent } from './scheduled_services/create-scheduled-service/create-scheduled-service.component';
import { ShowUnplannedServicesComponent } from './unplanned_services/show-unplanned-services/show-unplanned-services.component';
import { CreateUnplannedServiceComponent } from './unplanned_services/create-unplanned-service/create-unplanned-service.component';
import { UpdateUnplannedServiceComponent } from './unplanned_services/update-unplanned-service/update-unplanned-service.component';




const routes: Routes = [
  { path: '', redirectTo: 'member-list', pathMatch: 'full' },
  { path: 'member-list', component: MemberListComponent },
  { path: 'add-member', component: CreateMemberComponent },
  { path: 'update-member/:id', component: UpdateMemberComponent },
  { path: 'membership/:id/:name', component: ShowMembershipComponent} ,
  { path: 'membership', component: MembershipListComponent},
  { path: 'update-membership/:id/:name', component: UpdateMembershipComponent},
  { path: 'create-membership/:id/:name', component: CreateMembershipComponent},
  { path: 'measurements/:id/:name', component: ShowMeasurementsComponent},
  { path: 'create-measurement/:id/:name', component:CreateMeasurementComponent},
  { path: 'update-measurement/:id/:name', component:UpdateMeasurementComponent},
  { path: 'equipment-list', component:EquipmentListComponent },
  { path: 'update-equipment/:id', component:UpdateEquipmentComponent},
  { path: 'add-equipment', component:CreateEquipmentComponent},
  { path: 'scheduled-services/:id/:name', component:ShowScheduledServiceComponent},
  { path: 'create-scheduled-service/:id/:name', component:CreateScheduledServiceComponent},
  { path: 'update-scheduled-service/:id/:name', component:UpdateScheduledServiceComponent},
  { path: 'unplanned-services/:id/:name', component:ShowUnplannedServicesComponent},
  { path: 'create-unplanned-service/:id/:name', component:CreateUnplannedServiceComponent},
  { path: 'update-unplanned-service/:id/:name', component:UpdateUnplannedServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
