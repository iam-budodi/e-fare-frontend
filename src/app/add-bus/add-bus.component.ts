import { Booking } from './../booking';
import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-add-bus',
  templateUrl: './add-bus.component.html',
  styleUrls: ['./add-bus.component.css']
})
export class AddBusComponent implements OnInit {

  // bus: Booking = {
  //   route: '',
  //   category: '',
  //   departDate: null,
  //   totalSeat: null,
  //   seatNumber: null,
  //   seatAvailable: null,
  //   price: null,
  //   busImage: '',
  //   status: null
  // };

  newBusData: Booking;
  submitted = false;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
  }

  addBus(formValues: any): void {
    // const data = {
    //   route: this.bus.route,
    //   category: this.bus.category,
    //   departDate: this.bus.departDate,
    //   totalSeat: this.bus.totalSeat,
    //   seatNumber: this.bus.seatNumber,
    //   seatAvailable: this.bus.seatAvailable,
    //   price: this.bus.price,
    //   busImage: this.bus.busImage,
    //   status: this.bus.status
    // };
    this.newBusData = formValues as Booking;

    this.bookingService.createBus(this.newBusData).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
      error => {
        console.log(error);
      });
  }

  newBus(): void {
    this.submitted = false;
    this.newBusData = null;
    // this.bus =  {
    //   route: '',
    //   category: '',
    //   departDate: null,
    //   totalSeat: null,
    //   seatNumber: null,
    //   seatAvailable: null,
    //   price: null,
    //   busImage: '',
    //   status: null
    // };
  }
}
