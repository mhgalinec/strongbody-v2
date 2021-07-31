import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authService.register(this.form).subscribe(
      data =>{
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.navigate();
      },
      error =>{
        this.errorMessage = error.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  navigate(){
    setTimeout(()=>{
      this.router.navigate(['home']);
    },2500);
  }



}
