import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { AuthService } from "../_services/auth.service";

const ROLE_ADMIN = 'ROLE_ADMIN';
@Injectable()
export class RoleGuard implements CanActivate{

  constructor(private router:Router,private auth:AuthService){}

  canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ){
   if(this.auth.getRole() === ROLE_ADMIN){
     return true;
   }else{
     this.router.navigate(['home']);
   }

  }

}
