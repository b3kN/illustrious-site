import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from './user.service';
import { User } from '../shared/models/user.model';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser: User = new User();

  constructor(private userService: UserService,
              private router: Router) {
    const token = localStorage.getItem('token');
    const currentTime = Math.round((new Date()).getTime() / 1000);
    
    if (token) {
      let decodedUser = null;
      let decodedExp = null;
      let failure: boolean = false;
      
      try {
        decodedUser = this.decodeUserFromToken(token);
      } catch (e) {
        console.log('User could not be decoded.');
      }
      
      try {
        decodedExp = this.decodeExpFromToken(token);
      } catch (e) {
        console.log('Expiration could not be decoded.');
      }
      
      if (decodedExp < currentTime) {
        this.setCurrentUser(decodedUser);
      } else {
        localStorage.removeItem('token');
        this.loggedIn = false;
      }
    }
  }

  login(emailAndPassword) {
    return this.userService.login(emailAndPassword).map(
      res => {
        localStorage.setItem('token', res.data.token);
        const decodedUser = this.decodeUserFromToken(res.data.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.isAdmin = false;
    this.currentUser = new User();
    this.router.navigate(['/']);
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).id;
  }
  
  decodeExpFromToken(token) {
    return this.jwtHelper.decodeToken(token).exp;
  }

  setCurrentUser(decodedUser) {
    this.loggedIn = true;
    this.currentUser.id = decodedUser.id;
    this.currentUser.handle = decodedUser.handle;
    this.currentUser.role = decodedUser.role;
    decodedUser.role === 'admin' ? this.isAdmin = true : this.isAdmin = false;
    delete decodedUser.role;
  }

}