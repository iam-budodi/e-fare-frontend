import { BookingService } from './../booking.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  event: any;

  constructor(private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.event = this.bookingService.getEvent(+this.route.snapshot.params.id);
  }

}
