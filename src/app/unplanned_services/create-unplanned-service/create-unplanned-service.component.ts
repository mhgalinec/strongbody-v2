import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogElement } from 'src/app/dialogs/dialog.element';
import { UnplannedService } from 'src/app/models/unplannedServices';
import { UnplannedServiceService } from 'src/app/services/unplanned-service.service';

@Component({
  selector: 'app-create-unplanned-service',
  templateUrl: './create-unplanned-service.component.html',
  styleUrls: ['./create-unplanned-service.component.css']
})
export class CreateUnplannedServiceComponent implements OnInit {

  id:number;
  equipmentName:string;
  service:UnplannedService;

  constructor(private unplannedServicesService:UnplannedServiceService,private router:Router,private route:ActivatedRoute,
              public dialog:MatDialog) { }

  ngOnInit(){
    this.service = new UnplannedService();

    this.id = this.route.snapshot.params['id'];
    this.equipmentName = this.route.snapshot.params['name'];

  }

  createUnplannedService(){
    this.unplannedServicesService.createUnplannedService(this.id, this.service).subscribe(data=>{

      this.service = data;
      this.gotoList();

    },()=> this.openDialog());

    }

    openDialog(){
      this.dialog.open(DialogElement);
    }

    onSubmit(){
      this.createUnplannedService();
    }

    gotoList(){
      this.router.navigate(['equipment-list']);
    }
  }


