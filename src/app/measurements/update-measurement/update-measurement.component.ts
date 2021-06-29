import { Component, OnInit } from '@angular/core';
import { Measurements } from 'src/app/models/measurements';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';

@Component({
  selector: 'app-update-measurement',
  templateUrl: './update-measurement.component.html',
  styleUrls: ['./update-measurement.component.css']
})
export class UpdateMeasurementComponent implements OnInit {

	id:number;
	memberName:string;
	measurement:Measurements;

  constructor(private router:Router,private route:ActivatedRoute,private measurementService:MeasurementsService) { }


  ngOnInit() {
	this.measurement = new Measurements();

	this.id = this.route.snapshot.params['id'];
	this.memberName = this.route.snapshot.params['name'];

	this.getMeasurementForUpdate();

  }

  getMeasurementForUpdate(){
	  this.measurementService.getMeasurementForUpdate(this.id).subscribe(data=>{
		  this.measurement = data;
	  },error => console.log(error));
  }

  updateMeasurement(){
	  this.measurementService.updateMeasurement(this.id,this.measurement).subscribe(()=>{
		  this.measurement = new Measurements();
      this.gotoList();
	  },error => console.log(error));
  }

  onSubmit(){
	  this.updateMeasurement();
  }

  gotoList(){
	  this.router.navigate(['member-list']);
  }


}
