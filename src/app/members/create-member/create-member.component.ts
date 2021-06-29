import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent implements OnInit {

  member:Member;

  constructor(private memberService: MemberService,private router: Router,public dialog:MatDialog) { }

  ngOnInit() {
    this.member = new Member();
  }

  createMember(){
    this.memberService.createMember(this.member).subscribe(()=>{
        this.member = new Member();
        this.gotoList();
      },() => this.openDialog());
  }

  openDialog(){
	  this.dialog.open(DialogElement);
  }

  onSubmit(){
    this.createMember();
  }

  gotoList(){
    this.router.navigate(['member-list']);
  }

}
