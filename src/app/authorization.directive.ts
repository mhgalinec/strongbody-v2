import { Directive, ElementRef, HostListener, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthorizationDialog } from "./dialogs/authorization-dialog";
import { TokenStorageService } from "./_services/token-storage.service";

const ROLE_ADMIN:string = 'ROLE_ADMIN';

@Directive({
  selector:'[authorizationDirective]'
})

export class AuthorizationDirective{

  @Input('authorizationDirective')
  userRole:string;

  constructor(private el:ElementRef,
    private tokenStorage:TokenStorageService,
    private dialog:MatDialog){}

    ngOnInit():void{
      this.userRole = this.tokenStorage.getUser().roles.toString();
    }
  @HostListener('mousedown',['$event'])
  onMousedown(event){
    if(this.userRole !== ROLE_ADMIN){
      this.dialog.open(AuthorizationDialog);
    }

  }

}
