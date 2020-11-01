import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Booking } from './../../booking';
import { ResponseError } from './../../response-error';


@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  pageTitle = 'Bus Details';
  errorMessage = '';
  bus: Booking | undefined;

  faChevronLeft = faChevronLeft;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.bookingService.getBus(+this.route.snapshot.params.id).subscribe(response => this.bus = response);
    const busDetail: Booking | ResponseError = this.route.snapshot.data.resolvedBus;
    if (busDetail instanceof ResponseError) {
      this.errorMessage = busDetail.friendlyMessage;
    }
    else {
       this.bus = busDetail;
    }
  }

  onBack(): void {
    this.router.navigate(['/buses'])
  }

}
