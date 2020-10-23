import { catchError } from 'rxjs/operators';
import { BookingService } from './booking.service';
import { ResponseError } from './response-error';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Booking } from './booking';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Booking[] | ResponseError> {

  constructor(private bookingService: BookingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Booking[] | ResponseError> {
    return this.bookingService.getAllBuses().
      pipe(
        catchError(error => of(error))
      );
  }
}
