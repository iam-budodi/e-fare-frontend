import { ResolverService } from './resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingRouteActivatorService } from './booking-route-activator.service';
import { Error404Component } from './error404/error404.component';
import { UserComponent } from './user/user.component';
import { AddBusComponent } from './add-bus/add-bus.component';


const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: UserComponent},
  {path: 'buses', component: BookingListComponent, resolve: { resolvedBuses: ResolverService}},
  {path: 'buses/:id', component: BookingDetailsComponent},
  {path: 'add', component: AddBusComponent},
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
    UserComponent,
    AddBusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
