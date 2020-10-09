import { Observable, of } from 'rxjs';
import { Booking } from './booking';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor() { }

  getBuses(): Observable<Booking[]> {
    return of(BUSES);
  }

  getBus(id: number): Booking {
    return BUSES.find(event => event.id === id);
  }
}

const BUSES: Booking[] = [
  {
    id: 1,
    name: 'Mwanza',
    date: new Date('9/26/2036'),
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
  },
  {
    id: 2,
    name: 'Arusha',
    date: new Date('4/15/2037'),
    time: '9:00 am',
    price: 950.00,
    imageUrl: '/assets/images/ng-nl.png',
    location: {
      address: 'The NG-NL Convention Center & Scuba Shop',
      city: 'Amsterdam',
      country: 'Netherlands'
    },
  },
  {
    id: 3,
    name: 'Mbeya',
    date: new Date('5/4/2037'),
    time: '9:00 am',
    price: 759.00,
    imageUrl: '/assets/images/ng-conf.png',
    location: {
      address: 'The Palatial America Hotel',
      city: 'Salt Lake City',
      country: 'USA'
    },
  },
  {
    id: 4,
    name: 'Dodoma',
    date: new Date('6/10/2037'),
    time: '8:00 am',
    price: 800.00,
    imageUrl: '/assets/images/basic-shield.png',
    location: {
      address: 'The UN Angular Center',
      city: 'New York',
      country: 'USA'
    },
  },
  {
    id: 5,
    name: 'Mtwara',
    date: new Date('2/10/2037'),
    time: '9:00 am',
    price: 400.00,
    imageUrl: '/assets/images/ng-vegas.png',
    location: {
      address: 'The Excalibur',
      city: 'Las Vegas',
      country: 'USA'
    },
  }
];
