import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './home/nav/nav.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingRouteActivatorService } from './booking-route-activator.service';
import { Error404Component } from './error404/error404.component';
// import { LoginUserComponent } from './user/login-user/login-user.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { BookingModule } from "./booking/booking.module";


const appRoutes: Routes = [
  {path: 'home', component: WelcomeComponent},
  // {path: 'login', component: LoginUserComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    Error404Component,
    // LoginUserComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BookingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
