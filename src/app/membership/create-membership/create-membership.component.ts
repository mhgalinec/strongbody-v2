import { Component, OnInit } from '@angular/core';
import { Membership } from 'src/app/models/membership';
import { MembershipService } from 'src/app/services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-create-membership',
  templateUrl: './create-membership.component.html',
  styleUrls: ['./create-membership.component.css']
})
export class CreateMembershipComponent implements OnInit {
  id: number;
  memberName:string;
  membership: Membership;

  range = new FormGroup({
	  validFrom:new FormControl(),
	  validThrough:new FormControl()
  });

  constructor(private membershipService: MembershipService, private router: Router, private route: ActivatedRoute,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.membership = new Membership();

    //Get the member ID and name for the member you want to create the membership
    this.id = this.route.snapshot.params['id'];
	  this.memberName = this.route.snapshot.params['name'];

  }

  createMembership(){
    // Create membership with user entered data
    this.membershipService.createMembership(this.id,this.membership).subscribe(data => {
        this.membership = data;
        this.gotoList();
	  //Open an error dialog if the user has left required fields empty
    },() => this.openDialog());
  }

  openDialog(){
    this.dialog.open(DialogElement);
  }

  onSubmit(){
    this.createMembership();
  }

  gotoList(){
    this.router.navigate(['member-list']);
  }

}
