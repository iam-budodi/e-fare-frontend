import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AuthModule, AuthHttpInterceptor } from "@auth0/auth0-angular";


import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { BookingRouteActivatorService } from './booking-route-activator.service';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { Error404Component } from './error404/error404.component';
import { AppRoutingModule } from "./app-routing.module";
import { environment as env} from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    WelcomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    AuthModule.forRoot({
      ...env.auth,
      httpInterceptor: {
        ...env.httpInterceptor
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
