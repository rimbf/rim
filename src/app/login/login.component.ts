import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { resolve } from 'q';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
 email: string;
 password: string;
 errorMsg; string;

//  public config: ToasterConfig = new ToasterConfig({
//   positionClass: 'toast-top-right',
//   showCloseButton: true,
// });

// private toasterService: ToasterService,
  constructor( private router: Router, private authService: AuthenticationService ) { }


signIn(){
  this.authService.login({email: this.email, password: this.password})
  .then (resolve=> this.router.navigate (['gallery']))
  .catch (error => this.errorMsg= error.message)
  // this.toasterService.pop('success','h' )
}

}
