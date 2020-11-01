import { ActivatedRoute, Router } from '@angular/router';
import { ResponseError } from './../../response-error';
import { Component, OnInit } from '@angular/core';
import { Booking } from './../../booking';

@Component({
  selector: 'app-booking-list',
  templateUrl: './booking-list.component.html',
  styleUrls: ['./booking-list.component.css']
})
export class BookingListComponent implements OnInit {

  // buses: Booking[] | ResponseError;

  isError: boolean = false;

  pageTitle = 'Book Your Seat';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredBuses = this._listFilter ? this.filterBus(this.listFilter) : this.buses;
  }

  filteredBuses: Booking[] | ResponseError = [];
  buses: Booking[] = [];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const resolvedData: Booking[] | ResponseError = this.route.snapshot.data.resolvedBuses;
    const resolvedData: Booking[] = this.route.snapshot.data.resolvedBuses;
    if (resolvedData instanceof ResponseError) {
      //this.isError = true;
      this.buses = resolvedData;
    }
    else {
      // console.log(resolvedData);

      this.buses = resolvedData;
    }
    // this.bookingService.getAllBuses().subscribe(response => this.buses = response);
  }

  filterBus(filteredBy: string): Booking[] | ResponseError {
    const filterBy = filteredBy.toLocaleLowerCase();
    return this.buses.filter((bus: Booking) =>
      bus.busName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
