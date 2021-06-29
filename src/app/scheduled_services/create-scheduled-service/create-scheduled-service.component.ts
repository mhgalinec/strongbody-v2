import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogElement } from 'src/app/dialogs/dialog.element';
import { ScheduledService } from 'src/app/models/scheduledServices';
import { ScheduledServiceService } from 'src/app/services/scheduled-service.service';

@Component({
  selector: 'app-create-scheduled-service',
  templateUrl: './create-scheduled-service.component.html',
  styleUrls: ['./create-scheduled-service.component.css']
})
export class CreateScheduledServiceComponent implements OnInit {

  id:number;
  service:ScheduledService;
  equipmentName:string;

  constructor(private router:Router,private scheduledServicesService:ScheduledServiceService,private route:ActivatedRoute,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.service = new ScheduledService();

    //Get the equipment ID and name
    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

  }

  createScheduledService(){
    this.scheduledServicesService.createScheduledService(this.id, this.service).subscribe(data =>{
      this.service = data;
      this.gotoList();
    },() => this.openDialog());
  }

  openDialog(){
	  this.dialog.open(DialogElement);
  }
  onSubmit(){
    this.createScheduledService();
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }

}
