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
import { CreateMeasurementsComponent } from './measurements/create-measurements/create-measurements.component';
import { UpdateMeasurementsComponent } from './measurements/update-measurements/update-measurements.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NumbersOnlyDirective } from './numbers-only.directive';
import { ConfirmationDialog } from './dialogs/confirmation-dialog.element';
import { DialogElement } from './dialogs/dialog.element';

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
    CreateMeasurementsComponent,
    UpdateMeasurementsComponent,
    NumbersOnlyDirective,
	ConfirmationDialog,
	DialogElement
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
