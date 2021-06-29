
import { Component, OnInit } from '@angular/core';
import { Measurements } from 'src/app/models/measurements';
import { Router, ActivatedRoute } from '@angular/router';
import { MeasurementsService } from 'src/app/services/measurements.service';
import { animate, state, style, transition, trigger} from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';
import { Observable } from 'rxjs';

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

  measurement: Observable<Measurements[]>;
  id: number;
  memberName:string;
  expandedElement: Measurements | null;

  constructor(private router: Router, private measurementsService: MeasurementsService, private route:ActivatedRoute,
              public dialog:MatDialog) { }

  columns:any[] = [
    { name:'measurementDate',display:'Measurement Date'},
    { name:'height', display:'Height'},
    { name:'weight', display:'Weight'},
    { name:'bodyFat', display:'Body Fat'},
    { name:'shoulders', display:'Shoulders'},
    { name:'torso', display:'Torso'},
    { name:'waist', display:'Waist'},
    { name:'upperArm', display:'Upper Arm'},
    { name:'lowerArm', display:'Lower Arm'},
    { name:'upperLeg', display:'Upper Leg'},
    { name:'lowerLeg', display:'Lower Leg'},
    { name:'restingHeartRate', display:'Pulse'}
  ];

  displayedColumns:any[] = this.columns.map(column => column.name);

  ngOnInit()  {
	//Get the member ID and name
    this.id = this.route.snapshot.params['id'];
	  this.memberName = this.route.snapshot.params['name'];

	  this.getMeasurements();
  }

  getMeasurements(){
	  this.measurement = this.measurementsService.getMeasurements(this.id);
  }

  createMeasurement(id:number,name:string){
	  this.router.navigate(['create-measurement', id, name]);
  }

  updateMeasurement(id:number,name:string){
	  this.router.navigate(['update-measurement', id, name]);
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
	this.router.navigate(['member-list']);
}




}
