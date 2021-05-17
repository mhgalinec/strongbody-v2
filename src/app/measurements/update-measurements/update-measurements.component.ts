import { Component, OnInit } from '@angular/core';
import { Measurements } from 'src/app/models/measurements';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';

@Component({
  selector: 'app-update-measurements',
  templateUrl: './update-measurements.component.html',
  styleUrls: ['./update-measurements.component.css']
})
export class UpdateMeasurementsComponent implements OnInit {
	id:number;
	memberName:string;
	measurement:Measurements;

  constructor(private router:Router,private route:ActivatedRoute,private measurementService:MeasurementsService) { }

  ngOnInit() {
	this.measurement = new Measurements();
	
	this.id = this.route.snapshot.params['id'];
	this.memberName = this.route.snapshot.params['name'];
	
	this.measurementService.getMeasurementForUpdate(this.id).subscribe(data=>{
		this.measurement = data;
		
	},error => console.log(error));
	
  }

  updateMeasurement(){
	this.measurementService.updateMeasurement(this.id,this.measurement).subscribe(()=>{
		
		this.measurement = new Measurements();
		
	},error => console.log(error));
	
	this.gotoList();
  }

  onSubmit(){
	this.updateMeasurement();
  }

  gotoList(){
	this.router.navigate(['members']);
}

}
