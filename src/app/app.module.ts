import { ResolverService } from './booking/booking-list/resolver.service';
import { ResolveDetailsService } from './booking/booking-details/resolver.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavComponent } from './home/nav/nav.component';
import { BookingListComponent } from './booking/booking-list/booking-list.component';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking/booking-details/booking-details.component';
import { BookingRouteActivatorService } from './booking-route-activator.service';
import { Error404Component } from './error404/error404.component';
import { LoginUserComponent } from './user/login-user/login-user.component';
import { EditBusComponent } from './booking/bus/edit-bus/edit-bus.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { EditBusGuard } from "./booking/bus/edit-bus.guard";


const appRoutes: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'login', component: LoginUserComponent},
  {path: 'buses', component: BookingListComponent, resolve: { resolvedBuses: ResolverService}},
  {path: 'buses/:id', component: BookingDetailsComponent, resolve: { resolvedBus: ResolveDetailsService}},
  {path: 'buses/:id/edit', canDeactivate: [EditBusGuard], component: EditBusComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BookingListComponent,
    BookingDetailsComponent,
    Error404Component,
    LoginUserComponent,
    EditBusComponent,
    WelcomeComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
