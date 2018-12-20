import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "angular2-social-login";

import { Errors, UserService } from '../core';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit{
  public user;
  sub: any;
  authType: String = '';
  title: String = '';
  errors: Errors = { errors: {} };
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder,
    public _auth: AuthService,
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.url.subscribe(data => {
      // Get the last piece of the URL (it's either 'login' or 'register')
      this.authType = data[data.length - 1].path;
      console.warn(data, data[data.length - 1], data[data.length - 1].path);
      // Set a title for the page accordingly
      this.title = (this.authType === 'login') ? 'Sign in' : 'Sign up';
      // add form control for username if this is the register page
      if (this.authType === 'register') {
        this.authForm.addControl('username', new FormControl());
      }
    });
  }

  submitForm() {
    this.isSubmitting = true;
    this.errors = { errors: {} };

    const credentials = this.authForm.value;
    console.log("credentials", credentials);
    console.log("this.authType", this.authType);
    this.userService
      .attemptAuth(this.authType, credentials)
      .subscribe(
        data => {
          console.log("authForm", data);
          this.router.navigateByUrl('/');
        },
        err => {
          this.errors = err;
          this.isSubmitting = false;
        }
      );

  }

  signInSocial(provider) {
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log("signInAUTH", data);
        console.log("this.authType", this.authType);
        this.user = data;
        this.user.name;
        let user = this.user.name.replace(/ /g, "");
        let g = {username:user,email:this.user.email,password:"none1asd",image:this.user.image};
        console.log("g",g);
        this.userService
          .attemptAuth(this.authType, g)
          .subscribe(
            data => {
              console.log("auth", data);
              this.router.navigateByUrl('/');
            },
            err => {
              this.errors = err;
              this.isSubmitting = false;
            }
          );

      },
      (err) => {
        console.log("signInErr", err);
      }
    )
  }

  /*logout() {
    this._auth.logout().subscribe(
      (data) => { console.log(data); this.user = null; }
    )
  }*/

  /*ngOnDestroy() {
    console.log("entra en ngOnDestroy");
    this.sub.unsubscribe();
  }*/
}
