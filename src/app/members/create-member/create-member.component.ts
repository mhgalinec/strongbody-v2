import { Component, OnInit, Input } from '@angular/core';
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
  member:Member = new Member();



  constructor(private memberService: MemberService,private router: Router,public dialog:MatDialog) { }

  ngOnInit() {

  }

  newMember(): void{
    this.member = new Member();
  }

  save(){
    this.memberService.createMember(this.member).subscribe(()=>{
        this.member = new Member();
        this.gotoList();
      },() => this.openDialog());
  }

  openDialog(){
	this.dialog.open(DialogElement);
  }

  onSubmit(){
    this.save();
  }

  gotoList(){
    this.router.navigate(['/members']);
  }

}
