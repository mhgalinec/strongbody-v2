
import { Component, OnInit } from '@angular/core';
import { Measurements } from 'src/app/models/measurements';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';

@Component({
  selector: 'app-show-measurements',
  templateUrl: './show-measurements.component.html',
  styleUrls: ['./show-measurements.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ShowMeasurementsComponent implements OnInit {

  // measurements array will hold all measurement objects for a specific member
  measurements: Measurements[];
  id: number;
  memberName:string;
  displayedColumns:string[]=['measurementDate','height','weight','bodyFat','shoulders','torso','waist','upperArm','lowerArm','upperLeg','lowerLeg','restingHeartRate'];
  expandedElement: Measurements | null;

  constructor(private router: Router, private measurementsService: MeasurementsService, private route:ActivatedRoute,public dialog:MatDialog) { }

  ngOnInit()  {
	//initialize an empty measurements array for the mat-table datasource
    this.measurements = [];

	//Get the member id and name
    this.id = this.route.snapshot.params['id'];
	this.memberName = this.route.snapshot.params['name'];
	
    this.measurementsService.getMeasurements(this.id).subscribe(data =>{
		
		//Loop through data array and push every object in the measurements array
		for(let d of data){
			this.measurements.push(d);
		}

    },error => console.log(error));

  }

  createMeasurement(){
	this.router.navigate(['createMeasurement',this.id,this.memberName]);
  }
  
  updateMeasurement(id:number,name:string){	
	this.router.navigate(['updateMeasurement', id, name]);
  }
 
  deleteMeasurement(id:number){
	
	const dialogRef = this.dialog.open(ConfirmationDialog);
	
	dialogRef.afterClosed().subscribe(result=>{
		
		if(result === true){
			
			this.measurementsService.deleteMeasurement(id).subscribe(()=>{
			this.gotoList();
			
		},error => console.log(error));
		
		}
		
	},error => console.log(error));
  }

  gotoList(){
	this.router.navigate(['members']);
}
 



}
