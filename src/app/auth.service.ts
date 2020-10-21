import { Auth } from './auth';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Auth;

  constructor() { }

  loginUser(userName: string, password: string): any {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Japhet',
      lastName: 'Sebastian'
    };
  }

  isAuthenticated(): any {
    return !!this.currentUser;
  }
}
