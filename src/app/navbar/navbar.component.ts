import { Component, OnInit } from '@angular/core';
import { Observable } from '@firebase/util';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase/app'
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
 
  user: any;
  title: 'Gallery';

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.user= this.authService.authUser();
  }

  logOut() {
    this.authService.logout().then(onResolve => this.router.navigate['/']);
  }

}
