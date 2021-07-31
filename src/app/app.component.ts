import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'StrongBody';

  constructor(private tokenStorage:TokenStorageService,private authService:AuthService){}

  logout(){
    this.tokenStorage.signOut();
    window.location.reload();
  }

  isLoggedIn(){
    return this.authService.isAuthenticated();
  }

}
