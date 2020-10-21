import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string;
  password: string;
  mouseoverLogin: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(formValues): any {
    this.authService.loginUser(formValues.userName, formValues.password);
    this.router.navigate(['book']);
  }

  cancel(): any {
    this.router.navigate(['home']);
  }

}
