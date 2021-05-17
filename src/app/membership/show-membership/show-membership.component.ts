import { Component, OnInit } from '@angular/core';
import { MembershipService } from 'src/app/services/membership.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Membership } from 'src/app/models/membership';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';



@Component({
  selector: 'app-show-membership',
  templateUrl: './show-membership.component.html',
  styleUrls: ['./show-membership.component.css']
})
export class ShowMembershipComponent implements OnInit {
  id: number;
  memberName:string;
  membership: Membership[];
  displayedColumns:string[] =['id','registrationDate','validFrom','validThrough','membershipType','serviceLevel'];


  constructor(private membershipService: MembershipService, private router: Router, private route: ActivatedRoute,public dialog:MatDialog) { }

  ngOnInit(){
	
	//Initialize a membership array for mat-table dataSource
    this.membership = [];
	
	//Get the member id and full name
    this.id = this.route.snapshot.params['id'];
	this.memberName = this.route.snapshot.params['name'];

    this.membershipService.getMembership(this.id).subscribe(data => {
	
	  //Push the the data into the array. This data will be shown in the table
      this.membership.push(data);

    }, error => console.log(error));

  }

  updateMembership(id: number, name:string){
    this.router.navigate(['updateMembership', id, name])
  }

  deleteMembership(id:number){
	
	//Open confirmation dialog
	const dialogRef = this.dialog.open(ConfirmationDialog);
	
	dialogRef.afterClosed().subscribe(result =>{
		if(result === true){
			this.membershipService.deleteMembership(id).subscribe(()=>{
				this.gotoList();
			},error => console.log(error))
		}
		//else do nothing
	},error => console.log(error));
  }


  gotoList(){
	this.router.navigate(['members']);
  }

  createMembership(id:number,name:string){
	this.router.navigate(['createMembership',id,name]);
}

}
