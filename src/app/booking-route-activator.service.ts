import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingService } from './booking.service';

@Injectable({
  providedIn: 'root'
})
export class BookingRouteActivatorService implements CanActivate {

  constructor(private bookingService: BookingService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
                // the !! cast the results of this call to a boolean
                const eventExists = !!this.bookingService.getEvent(+route.params.id);

                if (!eventExists) {
                  this.router.navigate(['404']);
                }
                return eventExists;
  }

}
