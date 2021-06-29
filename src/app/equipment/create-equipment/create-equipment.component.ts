import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentService } from 'src/app/services/equipment.service';
import { Equipment } from 'src/app/models/equipment';
import { MatDialog } from '@angular/material/dialog';
import { DialogElement } from 'src/app/dialogs/dialog.element';

@Component({
  selector: 'app-create-equipment',
  templateUrl: './create-equipment.component.html',
  styleUrls: ['./create-equipment.component.css']
})
export class CreateEquipmentComponent implements OnInit {

  equipment:Equipment;

  constructor(private router:Router,private equipmentService:EquipmentService,public dialog:MatDialog) { }

  ngOnInit() {
	  this.equipment = new Equipment();
  }

  createEquipment(){
	  this.equipmentService.createEquipment(this.equipment).subscribe(() =>{
	  	this.equipment = new Equipment();
      this.gotoList();
	  },()=> this.openDialog());
  }

  openDialog(){
	  this.dialog.open(DialogElement);
  }

  onSubmit(){
	  this.createEquipment();
  }

  gotoList(){
	  this.router.navigate(['equipment-list']);
  }



}
