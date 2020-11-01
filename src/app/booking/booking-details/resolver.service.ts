import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Booking } from './../../booking';
import { BookingService } from './../../booking.service';
import { ResponseError } from './../../response-error';

@Injectable({
  providedIn: 'root'
})
export class ResolveDetailsService implements Resolve<Booking | ResponseError> {

  constructor(private bookingService: BookingService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Booking | ResponseError> {
    return this.bookingService.getBus(+route.paramMap.get('id')).
      pipe(
        catchError(error => of(error))
      );
  }
}
