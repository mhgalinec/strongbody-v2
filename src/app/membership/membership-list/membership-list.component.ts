import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/services/membership.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Membership } from 'src/app/models/membership';

@Component({
  selector: 'app-membership-list',
  templateUrl: './membership-list.component.html',
  styleUrls: ['./membership-list.component.css']
})
export class MembershipListComponent implements OnInit {

  membership:Observable<Membership[]>;

  constructor(private membershipService:MembershipService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.membership = this.membershipService.getMembershipList();
  }

  updateMembership(id: number) {
    this.router.navigate(['update-membership', id]);
  }


}
