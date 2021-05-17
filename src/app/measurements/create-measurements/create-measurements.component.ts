import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { Measurements } from 'src/app/models/measurements';
import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-create-measurements',
  templateUrl: './create-measurements.component.html',
  styleUrls: ['./create-measurements.component.css']
})
export class CreateMeasurementsComponent implements OnInit {
  id:number;
  memberName:string;
  measurement:Measurements;
  member:Member;
  
  
  constructor(private measurementsService:MeasurementsService,private router:Router,private route:ActivatedRoute,private memberService:MemberService,public dialog:MatDialog) { }

  ngOnInit(): void {
	
	//Get the member ID and name
	this.id = this.route.snapshot.params['id'];
	this.memberName = this.route.snapshot.params['name'];
	
	//Create a new measurement object
	this.measurement = new Measurements();

  }

  save(){
	//Create a new measurement object with the user entered data(form fields)
	this.measurementsService.createMeasurement(this.id,this.measurement).subscribe(data =>{
		
		this.measurement = data;
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
    this.router.navigate(['members']);
  }

}
