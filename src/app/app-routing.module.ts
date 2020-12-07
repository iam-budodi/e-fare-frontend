import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from './home/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'home', component: WelcomeComponent },
  {
    path: 'buses',
    loadChildren: () =>
      import('./booking/booking.module').then(m => m.BookingModule)
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, { useHash: true, preloadingStrategy: PreloadAllModules }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
