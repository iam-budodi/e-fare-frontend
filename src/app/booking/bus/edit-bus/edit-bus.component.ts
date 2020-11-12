import { group } from '@angular/animations';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import {
  FormBuilder,
  FormControlName,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Booking } from 'src/app/booking';
import { BookingService } from 'src/app/booking.service';
import { GenericValidator } from './../generic-validator';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css'],
})
export class EditBusComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, { read: ElementRef })
  formInputElements: ElementRef[];

  pageTitle = 'Edit Bus';
  pageSubTitle = 'Your data was submitted successfully!';
  submitted: boolean;
  errorMessage: string;
  busForm: FormGroup;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  private sub: Subscription;
  bus: Booking;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      busName: {
        required: 'Bus name is required.',
        minlength: 'Bus name must be at least three characters.',
        maxlength: 'bus name cannot exceed 50 characters',
      },

      busRoute: {
        required: 'Bus route is required.',
        minlength: 'Bus name must be at least three characters.',
        maxlength: 'bus name cannot exceed 50 characters',
      },

      busCategory: {
        required: 'Bus category is required.',
        minlength: 'Bus name must be at least three characters.',
        maxlength: 'bus name cannot exceed 15 characters',
      },

      departDate: {
        required: 'Bus departing date is a must',
      },

      totalSeats: {
        required: 'Total number of bus seats is required',
      },

      seatSelected: {
        required: 'Must be defaulted to zero',
      },

      seatAvailable: {
        required: 'Can not be empty',
      },

      price: {
        required: 'Bus fare price is required.',
        minlength: 'Bus fare must be at least three digits',
        maxlength: 'Bus fare cannot exceed 5 digits',
      },
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    // This is required because the valueChanges does not provide notification on blur
    const controlBlurs: Observable<
      any
    >[] = this.formInputElements.map((formControl: ElementRef) =>
      fromEvent(formControl.nativeElement, 'blur')
    );

    // Merge the blur event observable with the valueChanges observable
    // so we only need to subscribe once.
    merge(this.busForm.valueChanges, ...controlBlurs)
      .pipe(debounceTime(800))
      .subscribe((value) => {
        this.displayMessage = this.genericValidator.processMessages(
          this.busForm
        );
      });
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.busForm = this.fb.group({
      busName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      busRoute: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      busCategory: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      departDate: ['', Validators.required],
      totalSeats: ['', Validators.required],
      seatSelected: ['', Validators.required],
      seatAvailable: ['', Validators.required],
      price: [
        '',
        [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      ],
      imageUrl: '',
    });

    // Read the product Id from the route parameter
    this.sub = this.route.paramMap.subscribe((params) => {
      const id = +params.get('id');
      this.getBus(id);
    });
  }

  getBus(id: number): void {
    this.bookingService.getBus(id).subscribe({
      next: (bus: Booking) => this.displayBus(bus),
      error: (err) => (this.errorMessage = err),
    });
  }

  displayBus(bus: Booking): void {
    if (this.busForm) {
      this.busForm.reset();
    }
    this.bus = bus;

    if (this.bus.id === 0) {
      this.pageTitle = 'Add Bus';
    } else {
      this.pageTitle = `Edit Bus: ${this.bus.busName}`;
    }

    // Update data on the form
    this.busForm.patchValue({
      busName: this.bus.busName,
      busRoute: this.bus.busRoute,
      busCategory: this.bus.busCategory,
      departDate: this.bus.departDate,
      totalSeats: this.bus.totalSeats,
      seatSelected: this.bus.seatSelected,
      seatAvailable: this.bus.seatAvailable,
      price: this.bus.price,
      imageUrl: this.bus.imageUrl,
    });
  }

  deleteBus(): void {
    if (this.bus.id === 0) {
      // Dont delete, it was never saved
      this.onSaveComplete();
    } else {
      if (confirm(`Do you want to delete the bus: ${this.bus.busName}?`)) {
        this.bookingService.deleteBus(this.bus.id).subscribe({
          next: () => this.onSaveComplete(),
          error: (err) => (this.errorMessage = err),
        });
      }
    }
  }

  saveBus(): void {
    if (this.busForm.valid) {
      if (this.busForm.dirty) {
        const bus = { ...this.bus, ...this.busForm.value };

        if (bus.id === 0) {
          this.submitted = true;
          this.bookingService.createBus(bus).subscribe({
            next: () => this.onSaveComplete(),
            error: (err) => (this.errorMessage = err),
          });
        } else {
          this.bookingService.updateBus(bus).subscribe({
            next: () => this.onSaveComplete(),
            error: (err) => (this.errorMessage = err),
          });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.busForm.reset();
    this.router.navigate(['/buses']);
  }
}
