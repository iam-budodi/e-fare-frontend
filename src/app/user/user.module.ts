import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';


import { LoginUserComponent } from './login-user/login-user.component';

@NgModule({
  declarations: [
    LoginUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: LoginUserComponent }
    ])
  ]
})
export class UserModule { }
