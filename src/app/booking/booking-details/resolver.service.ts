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
    const id = +route.paramMap.get('id');
    return this.bookingService.getBus(id).
      pipe(
        catchError(error => of(error))
      );
  }
}
