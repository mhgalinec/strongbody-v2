import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Observable } from 'rxjs';
import { Equipment } from 'src/app/models/equipment';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';
import { TEXT_COLUMN_OPTIONS } from '@angular/cdk/table';

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EquipmentListComponent implements OnInit {

  equipment:Observable<Equipment[]>;
  expandedElement:Equipment | null;

  constructor(private router:Router,private equipmentService:EquipmentService,public dialog:MatDialog) { }

  columns:any[] = [
    { name:'name', display:'Name'},
    { name:'serialNumber', display:'Serial Number'},
    { name:'category', display:'Category'},
    { name:'manufacturer', display:'Manufacturer'},
    { name:'width', display:'Width'},
    { name:'length', display:'Length'},
    { name:'height', display:'Height'},
    { name:'weight', display:'Weight'}
  ];

  displayedColumns:any[] = this.columns.map(column => column.name);

  ngOnInit() {
	  this.reloadData();
  }

  reloadData(){
	  this.equipment = this.equipmentService.getEquipmentList();
  }

  deleteEquipment(id:number){
	  const dialogRef = this.dialog.open(ConfirmationDialog);

	  dialogRef.afterClosed().subscribe(result =>{
		  if(result === true){
			  this.equipmentService.deleteEquipment(id).subscribe(()=>{
				  this.reloadData();
			  });
		  }
		  //else do nothing
	  },error => console.log(error));
  }

  updateEquipment(id:number){
	  this.router.navigate(['update-equipment', id]);
  }

  //Use the foreign key in scheduled service to show all scheduled services
  //for a equipment
  showScheduledServices(id:number,name:string){
    this.router.navigate(['scheduled-services', id, name]);
  }

  //Use the foreign key in unplanned service to show all unplanned services
  //for a equipment
  showUnplannedServices(id:number,name:string){
    this.router.navigate(['unplanned-services', id, name]);
  }

}
