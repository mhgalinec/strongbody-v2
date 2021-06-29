import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmationDialog } from 'src/app/dialogs/confirmation-dialog.element';
import { ScheduledService } from 'src/app/models/scheduledServices';
import { ScheduledServiceService } from 'src/app/services/scheduled-service.service';

@Component({
  selector: 'app-show-scheduled-service',
  templateUrl: './show-scheduled-service.component.html',
  styleUrls: ['./show-scheduled-service.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ShowScheduledServiceComponent implements OnInit {

  id:number;
  equipmentName:string;
  scheduledServices:Observable<ScheduledService[]>;
  expandedElement: ScheduledService | null;

  constructor(private router:Router, private scheduledServicesService:ScheduledServiceService,private route:ActivatedRoute,
              public dialog:MatDialog) { }

  columns:any[] = [
    {name:'serviceType', display:'Service Type'},
    {name:'serviceDate', display:'Service Date'},
    {name:'warranty', display:'Warranty'},
    {name:'price', display:'Price'},
    {name:'serviceCompany', display:'Service Company'}
  ];

  displayedColumns = this.columns.map(column => column.name);

  ngOnInit() {
    //Get the equipment ID and name
    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

    this.getScheduledServices();
  }

  getScheduledServices(){
    this.scheduledServices = this.scheduledServicesService.getScheduledService(this.id);
  }

  createScheduledService(id:number,name:string){
    this.router.navigate(['create-scheduled-service',id,name]);
  }

  updateScheduledService(id:number,name:string){
    this.router.navigate(['update-scheduled-service', id, name]);

  }

  deleteScheduledService(id:number){

    const dialogRef = this.dialog.open(ConfirmationDialog);

    dialogRef.afterClosed().subscribe(result=>{

      if(result === true){

        this.scheduledServicesService.deleteScheduledService(id).subscribe(()=>{
        this.gotoList();

      },error => console.log(error));
      }
    },error => console.log(error));
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }

}
