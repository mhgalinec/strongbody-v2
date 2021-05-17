import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {
  id: number;
  member: Member;

  constructor(private memberService: MemberService, private router: Router,
              private route: ActivatedRoute,public dialog:MatDialog) { }


  ngOnInit() {
    //Show the selected members info on page load
    this.member = new Member();
    this.id = this.route.snapshot.params['id'];

    this.memberService.getMember(this.id).subscribe(data => {
        this.member = data;
      },error => console.log(error));

  }

  openDialog(){
	this.dialog.open(DialogElement);
}

  updateMember(){
    //Update the current member with the new data
      this.memberService.updateMember(this.id, this.member).subscribe(data => {
          this.member = data;
        },() => this.openDialog());
      //Navigate back to member list after submitting the updated data
      this.gotoList();
    }

  onSubmit(){
    this.updateMember();
  }

  gotoList(){
    this.router.navigate(['/members']);
  }


}
