import { Component, OnInit } from '@angular/core';
import { Membership } from 'src/app/models/membership';
import { MembershipService } from 'src/app/services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-membership',
  templateUrl: './update-membership.component.html',
  styleUrls: ['./update-membership.component.css']
})
export class UpdateMembershipComponent implements OnInit {

  id:number;
  membership:Membership;
  memberName:string;

  constructor(private membershipService:MembershipService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.membership = new Membership();

	  //Get the membership id and member name from url
    this.id = this.route.snapshot.params['id'];
	  this.memberName = this.route.snapshot.params['name'];

    this.getMembershipForUpdate();
  }

  getMembershipForUpdate(){
    this.membershipService.getMembershipForUpdate(this.id).subscribe(data=>{
      this.membership = data;
    },error => console.log(error));
  }

  updateMembership(){
    this.membershipService.updateMembership(this.id,this.membership).subscribe(() =>{
      this.membership = new Membership();
      this.gotoList();
    },error => console.log(error));
  }

  onSubmit(){
    this.updateMembership();
  }

  gotoList(){
    this.router.navigate(['member-list']);
  }

}
