import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduledService } from 'src/app/models/scheduledServices';
import { ScheduledServiceService } from 'src/app/services/scheduled-service.service';

@Component({
  selector: 'app-update-scheduled-service',
  templateUrl: './update-scheduled-service.component.html',
  styleUrls: ['./update-scheduled-service.component.css']
})
export class UpdateScheduledServiceComponent implements OnInit {

  id:number;
  service:ScheduledService;
  equipmentName:string;

  constructor(private scheduledServicesService:ScheduledServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.service = new ScheduledService();

    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

    this.getServiceForUpdate();
  }

  getServiceForUpdate(){
    this.scheduledServicesService.getScheduledServiceForUpdate(this.id).subscribe(data =>{
        this.service = data;
    },error => console.log(error));
  }

  updateService(){
    this.scheduledServicesService.updateScheduledService(this.id, this.service).subscribe(()=>{
      this.service = new ScheduledService();
      this.gotoList();
    },error => console.log(error));
  }

  onSubmit(){
    this.updateService();
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }

}
