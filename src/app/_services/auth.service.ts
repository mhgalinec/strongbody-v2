import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';

const AUTH_API = 'http://localhost:8080/strongbody-v2.0/src/auth';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private tokenStorage:TokenStorageService) { }

  login(credentials): Observable<any>{
    return this.http.post(AUTH_API + '/login',{
      username:credentials.username,
      password:credentials.password
    }, httpOptions)
  }

  register(user):Observable<any>{
    return this.http.post(AUTH_API + '/signup',{
      username:user.username,
      password:user.password,
      role:user.role
    }, httpOptions)
  }

  isAuthenticated(){
    let token = this.tokenStorage.getToken();
    if(token){
      return true;
    }
    return false;
  }

  getRole(){
    let userRole = this.tokenStorage.getUser().roles.toString();
    return userRole;
  }
}
