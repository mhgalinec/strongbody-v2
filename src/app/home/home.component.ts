import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser:any;
  userRole:any;

  constructor(private tokenStorage:TokenStorageService,private router:Router) { }

  ngOnInit() {
    this.currentUser = this.tokenStorage.getUser().username;
    this.userRole = this.tokenStorage.getUser().roles;
  }

  logout(){
    this.tokenStorage.signOut();
    this.router.navigate(['login']);
  }

}
