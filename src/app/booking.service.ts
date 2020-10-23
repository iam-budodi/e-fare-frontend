import { ResponseError } from './response-error';
import { Observable, throwError } from 'rxjs';
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

  constructor(private http: HttpClient) {}

  private handleHttpError(error: HttpErrorResponse): Observable<ResponseError> {
    const dataError = {} as ResponseError;
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
    return this.http.get<Booking>(`${ baseUrl }/${ id }`, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  createBus(data: Booking): Observable<Booking | ResponseError> {
    return this.http.post<Booking>(baseUrl, data, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  updateBus(id, data): Observable<Booking | ResponseError> {
    return this.http.put<Booking>(`${ baseUrl }/${ id }`, data, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  deleteBus(id: number): Observable<Booking | ResponseError> {
    return this.http.delete<Booking>(`${ baseUrl }/${ id }`).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  deleteAllBuses(): Observable<Booking[] | ResponseError> {
    return this.http.delete<Booking[]>(baseUrl).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

  findByRoutes(route: string): Observable<Booking | ResponseError> {
    return this.http.get<Booking>(`${ baseUrl }?route=${route}`, {
      headers: getHeader
    }).pipe(
      catchError(error => this.handleHttpError(error))
    );
  }

}
