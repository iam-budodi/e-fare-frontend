import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookingListComponent } from './booking-list/booking-list.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { EditBusComponent } from './bus/edit-bus/edit-bus.component';
import { EditBusGuard } from "./bus/edit-bus.guard";
import { ResolverService } from './booking-list/resolver.service';
import { ResolveDetailsService } from './booking-details/resolver.service';


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
    RouterModule.forChild([
      { path: 'buses', component: BookingListComponent, resolve: { resolvedBuses: ResolverService } },
      { path: 'buses/:id', component: BookingDetailsComponent, resolve: { resolvedBus: ResolveDetailsService } },
      { path: 'buses/:id/edit', canDeactivate: [EditBusGuard], component: EditBusComponent },
    ])
  ]
})
export class BookingModule { }
