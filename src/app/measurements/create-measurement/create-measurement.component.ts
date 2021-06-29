import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { Measurements } from 'src/app/models/measurements';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-create-measurement',
  templateUrl: './create-measurement.component.html',
  styleUrls: ['./create-measurement.component.css']
})
export class CreateMeasurementComponent implements OnInit {
  id:number;
  memberName:string;
  measurement:Measurements;

  constructor(private measurementsService:MeasurementsService,private router:Router,private route:ActivatedRoute,
              public dialog:MatDialog) { }

  ngOnInit(){
	  this.measurement = new Measurements();

	  //Get the member ID and name
	  this.id = this.route.snapshot.params['id'];
	  this.memberName = this.route.snapshot.params['name'];

  }

  createMeasurement(){
	  //Create a new measurement object with the user entered data(form fields)
	  this.measurementsService.createMeasurement(this.id,this.measurement).subscribe(data =>{
		  this.measurement = data;
		  this.gotoList();
      //Open an error dialog if the user has left required fields empty
	  },() => this.openDialog());
  }

  openDialog(){
	  this.dialog.open(DialogElement);
  }

  onSubmit(){
	  this.createMeasurement();
  }

  gotoList(){
    this.router.navigate(['member-list']);
  }

}
