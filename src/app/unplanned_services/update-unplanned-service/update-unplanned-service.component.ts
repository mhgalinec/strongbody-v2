import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogElement } from 'src/app/dialogs/dialog.element';
import { UnplannedService } from 'src/app/models/unplannedServices';
import { UnplannedServiceService } from 'src/app/services/unplanned-service.service';

@Component({
  selector: 'app-update-unplanned-service',
  templateUrl: './update-unplanned-service.component.html',
  styleUrls: ['./update-unplanned-service.component.css']
})
export class UpdateUnplannedServiceComponent implements OnInit {

  id:number;
  equipmentName:string;
  service:UnplannedService;

  constructor(private router:Router,private route:ActivatedRoute,private unplannedServicesService:UnplannedServiceService,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.service = new UnplannedService();

    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

    this.getUnplannedServiceForUpdate();

  }

  getUnplannedServiceForUpdate(){
    this.unplannedServicesService.getUnplannedServiceForUpdate(this.id).subscribe(data =>{
      this.service = data;
    },() => this.openDialog());
  }

  updateUnplannedService(){
    this.unplannedServicesService.updateUnplannedService(this.id, this.service).subscribe(()=>{
      this.service = new UnplannedService();
      this.gotoList();
    },error => console.log(error));
  }

  openDialog(){
    this.dialog.open(DialogElement);
  }

  onSubmit(){
    this.updateUnplannedService();
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }
}
