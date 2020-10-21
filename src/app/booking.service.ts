import { Observable, of } from 'rxjs';
import { Booking } from './booking';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/buses';
const getHeader: HttpHeaders = new HttpHeaders({
  Accept: 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient ) {}

  getAllBuses(): Observable<Booking[]> {
    return this.http.get<Booking[]>(baseUrl, {
      headers: getHeader
    });
  }

  getBus(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${ baseUrl }/${ id }`, {
      headers: getHeader
    });
  }

  createBus(data: Booking): Observable<Booking> {
    return this.http.post<Booking>(baseUrl, data, {
      headers: getHeader
    });
  }

  updateBus(id, data): Observable<Booking> {
    return this.http.put<Booking>(`${ baseUrl }/${ id }`, data, {
      headers: getHeader
    });
  }

  deleteBus(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${ baseUrl }/${ id }`);
  }

  deleteAllBuses(): Observable<Booking[]> {
    return this.http.delete<Booking[]>(baseUrl);
  }

  findByRoutes(route: string): Observable<Booking> {
    return this.http.get<Booking>(`${ baseUrl }?route=${route}`, {
      headers: getHeader
    });
  }

}
