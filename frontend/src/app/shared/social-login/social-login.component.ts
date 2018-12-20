import { Component, OnDestroy } from '@angular/core';
import { AuthService } from "angular2-social-login";
import { User, UserService } from '../../core';

@Component({
    selector: "app-social-login",
    templateUrl: "./social-login.component.html"
})
export class SociaLoginComponent implements OnDestroy{
    public user;
    sub: any;
    constructor(
        public _auth: AuthService,
        private userService: UserService
    ) { }
    currentUser: User;
    signIn(provider){
        console.log("SIGNIN TS");
        this.sub = this._auth.login(provider).subscribe(
          (data) => {
            console.log("signIn",data);
            this.user=data;
            this.userService.currentUser.subscribe(
                (userData) => {
                    console.log("currentUser",userData);
                  this.currentUser = userData;
                }
              );
          },
          (err) => {
            console.log("signInErr",err);
          }
        )
      }
    
      logout(){
        this._auth.logout().subscribe(
          (data)=>{console.log(data);this.user=null;}
        )
      }
    
      ngOnDestroy(){
        this.sub.unsubscribe();
      }

}
