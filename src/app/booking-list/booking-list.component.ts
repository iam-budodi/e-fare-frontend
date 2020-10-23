import { ActivatedRoute } from '@angular/router';
import { ResponseError } from './../response-error';
import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  buses: Booking[] | ResponseError;
  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: Booking[] | ResponseError = this.route.snapshot.data.resolvedBuses;
    // const err: ResponseError;
    if (resolvedData === {} as ResponseError) {
      console.error(resolvedData.friendlyMessage);
    }
    else {
      this.buses = resolvedData;
    }
    // this.bookingService.getAllBuses().subscribe(response => this.buses = response);
  }

}
