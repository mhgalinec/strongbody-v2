import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';


@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MemberListComponent implements OnInit {
  members: Observable<Member[]>;
  displayedColumns: string[] = ['fullName', 'dateOfBirth', 'sex', 'contactNumber', 'email', 'diet'];
  expandedElement: Member | null;

  

  constructor(private memberService: MemberService, private router: Router,public dialog:MatDialog) { }


  ngOnInit() {
    //Shows member list when the page is loaded
    this.reloadData();
	
  }

  reloadData() {
    this.members = this.memberService.getMemberList();
  }


  deleteMember(id: number) {
	const dialogRef = this.dialog.open(ConfirmationDialog);
	
	dialogRef.afterClosed().subscribe(result =>{
		if(result === true){
			this.memberService.deleteMember(id).subscribe(()=>{
				this.reloadData();
			});
		}
		//else do nothing
	},error => console.log(error));

  }


  updateMember(id: number) {
    this.router.navigate(['update', id]);
  }


  // Uses the foreign key in membership to show a members membership
  showMembershipByMemberID(id:number,name:string){
	this.router.navigate(['membership',id,name]);
  }

  //Use the foreign key in measurements to show all measurements for a member
  showMeasurementsByMemberID(id:number,name:string){
	this.router.navigate(['measurements', id, name ] );
  }




}
