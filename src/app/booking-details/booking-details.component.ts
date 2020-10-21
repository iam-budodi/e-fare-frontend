import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from '../booking';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  bus: Booking;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookingService.getBus(+this.route.snapshot.params.id).subscribe(response => this.bus = response);
  }

}
