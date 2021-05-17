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
import { CreateMeasurementsComponent } from './measurements/create-measurements/create-measurements.component';
import { UpdateMeasurementsComponent } from './measurements/update-measurements/update-measurements.component';


const routes: Routes = [
  { path: '', redirectTo: 'members', pathMatch: 'full' },
  { path: 'members', component: MemberListComponent },
  { path: 'add', component: CreateMemberComponent },
  { path: 'update/:id', component: UpdateMemberComponent },
  { path: 'membership/:id/:name', component: ShowMembershipComponent} ,
  { path: 'membership', component: MembershipListComponent},
  { path: 'updateMembership/:id/:name', component: UpdateMembershipComponent},
  { path: 'createMembership/:id/:name', component: CreateMembershipComponent},
  { path: 'measurements/:id/:name', component: ShowMeasurementsComponent},
  { path: 'createMeasurement/:id/:name', component:CreateMeasurementsComponent},
  { path: 'updateMeasurement/:id/:name', component:UpdateMeasurementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
