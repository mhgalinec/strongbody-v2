import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';
import { UnplannedService } from 'src/app/models/unplannedServices';
import { UnplannedServiceService } from 'src/app/services/unplanned-service.service';

@Component({
  selector: 'app-show-unplanned-services',
  templateUrl: './show-unplanned-services.component.html',
  styleUrls: ['./show-unplanned-services.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ShowUnplannedServicesComponent implements OnInit {

  id:number;
  equipmentName:string;
  unplannedServices:Observable<UnplannedService[]>;
  expandedElement:UnplannedService | null;

  constructor(private unplannedServicesService:UnplannedServiceService,private router:Router,private route:ActivatedRoute,
              public dialog:MatDialog) { }

  columns:any[]=[
    {name:'faultType',display:'Fault Type'},
    {name:'dateOfFault',display:'Date of Fault'},
    {name:'warranty',display:'Warranty'},
    {name:'price',display:'Price'},
    {name:'serviceCompany',display:'Service Company'}
  ];

  displayedColumns = this.columns.map(column => column.name);

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

    this.getUnplannedService();

  }

  getUnplannedService(){
    this.unplannedServices = this.unplannedServicesService.getUnplannedService(this.id);
  }

  createUnplannedService(id:number,name:string){
    this.router.navigate(['create-unplanned-service', id, name]);
  }

  updateUnplannedService(id:number,name:string){
    this.router.navigate(['update-unplanned-service', id, name]);
  }

  deleteUnplannedService(id:number){

    const dialogRef = this.dialog.open(ConfirmationDialog);

    dialogRef.afterClosed().subscribe(result=>{

      if(result === true){

        this.unplannedServicesService.deleteUnplannedService(id).subscribe(()=>{
        this.gotoList();

      },error => console.log(error));
      }
    },error => console.log(error));
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }

}
