import { ResponseError } from './response-error';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Booking } from './booking';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


const baseUrl = 'http://localhost:8080/api/buses';
const getHeader: HttpHeaders = new HttpHeaders({
  Accept: 'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  private handleHttpError(error: HttpErrorResponse): Observable<ResponseError> {
    // const dataError = {} as ResponseError;
    // dataError.errorNumber = error.status;
    // dataError.errorMessage = error.statusText;
    // dataError.friendlyMessage =  error.error.message;
    // console.log(dataError.friendlyMessage);
    const dataError = new ResponseError();
    dataError.errorNumber = error.status;
    dataError.errorMessage = error.statusText;
    dataError.friendlyMessage = error.error.message;
    return throwError(dataError);
  }

  getAllBuses(): Observable<Booking[] | ResponseError> {
    return this.http.get<Booking[]>(baseUrl, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  getBus(id: number): Observable<Booking | ResponseError> {
    if (id === 0) {
      return of(this.initializeBus());
    }
    return this.http.get<Booking>(`${baseUrl}/${id}`, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  createBus(bus: Booking): Observable<Booking | ResponseError> {
    bus.id = null;
    return this.http.post<Booking>(baseUrl, bus, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  updateBus(bus: Booking): Observable<Booking | ResponseError> {
    return this.http.put<Booking>(`${baseUrl}/${bus.id}`, bus, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  deleteBus(id: number): Observable<Booking | ResponseError> {
    return this.http.delete<Booking>(`${baseUrl}/${id}`).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  deleteAllBuses(): Observable<Booking[] | ResponseError> {
    return this.http.delete<Booking[]>(baseUrl).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  findByName(busName: string): Observable<Booking | ResponseError> {
    return this.http.get<Booking>(`${baseUrl}?busName=${busName}`, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  private initializeBus(): Booking {
    // return an initialized object
    return {
      id: 0,
      busName: null,
      busRoute: null,
      busCategory: null,
      departDate: null,
      totalSeats: null,
      seatSelected: null,
      seatAvailable: null,
      price: null,
      imageUrl: null
    };
  }

}
