import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {
  events: any[];
  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.events = this.bookingService.getEvents();
  }

}
