import { TestBed } from '@angular/core/testing';

import { BookingRouteActivatorService } from './booking-route-activator.service';

describe('BookingRouteActivatorService', () => {
  let service: BookingRouteActivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingRouteActivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
