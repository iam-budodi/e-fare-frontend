import { BookingRouteActivatorService } from './booking-route-activator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { Error404Component } from './error404/error404.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'book', component: BookingListComponent},
  {path: 'book/:id', component: BookingDetailsComponent, canActivate: [BookingRouteActivatorService]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    BookingListComponent,
    BookingDetailsComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
