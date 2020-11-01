import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Booking } from './../../booking';
import { ResponseError } from './../../response-error';
import { BookingService } from './../../booking.service';


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