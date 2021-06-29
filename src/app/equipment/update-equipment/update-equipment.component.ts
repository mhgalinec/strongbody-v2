import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogElement } from 'src/app/dialogs/dialog.element';
import { Equipment } from 'src/app/models/equipment';
import { EquipmentService } from 'src/app/services/equipment.service';

@Component({
  selector: 'app-update-equipment',
  templateUrl: './update-equipment.component.html',
  styleUrls: ['./update-equipment.component.css']
})
export class UpdateEquipmentComponent implements OnInit {

  id:number;
  equipment:Equipment;

  constructor(private router:Router,private route:ActivatedRoute,private equipmentService:EquipmentService,
              public dialog:MatDialog) { }

  ngOnInit() {
    this.equipment = new Equipment();
    this.id = this.route.snapshot.params['id'];

    //Show the selected equipment info on page load
    this.getEquipment();
  }

  getEquipment(){
    this.equipmentService.getEquipment(this.id).subscribe(data =>{
      this.equipment = data;
    },error => console.log(error));
  }

  updateEquipment(){
    this.equipmentService.updateEquipment(this.id, this.equipment).subscribe(()=>{
      this.equipment = new Equipment();
      this.gotoList();
    },()=> this.openDialog());
  }

  openDialog(){
    this.dialog.open(DialogElement);
  }

  onSubmit(){
    this.updateEquipment();
  }

  gotoList(){
    this.router.navigate(['equipment-list']);
  }

}
