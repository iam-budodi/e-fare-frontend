import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { EditBusComponent } from './bus/edit-bus/edit-bus.component';
import { EditBusGuard } from './bus/edit-bus.guard';
import { ResolverService } from './booking-list/resolver.service';
import { ResolveDetailsService } from './booking-details/resolver.service';


const bookingRoutes: Routes = [
  {
    path: '',
    component: BookingListComponent,
    resolve: { resolvedBuses: ResolverService }
  },
  {
    path: ':id',
    component: BookingDetailsComponent,
    resolve: { resolvedBus: ResolveDetailsService },
  },
  {
    path: ':id/edit',
    canDeactivate: [EditBusGuard],
    component: EditBusComponent,
  },
];
@NgModule({
  declarations: [
    BookingListComponent,
    BookingDetailsComponent,
    EditBusComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(bookingRoutes),
  ],
})
export class BookingModule { }
