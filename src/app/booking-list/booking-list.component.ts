import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  buses: Booking[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.bookingService.getAllBuses().subscribe(response => this.buses = response);
  }

}
