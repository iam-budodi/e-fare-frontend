import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.css']
})
export class Error404Component implements OnInit {

  // errorMessage = 'Error 404 - Page Not Found';
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
