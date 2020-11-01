import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Passenger } from "./../passenger";


// cross - field custom validator
function emailMatch(c: AbstractControl): {[key: string]: boolean} | null {
  const emailControl = c.get('email');
  const confirmEmailControl = c.get('confirmEmail');

  if(emailControl.pristine || confirmEmailControl.pristine) {
    return null;
  }

  if(emailControl.value === confirmEmailControl.value) {
    return null;
  }

  return { 'match': true}
}

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  passengerForm: FormGroup;
  passenger = new Passenger();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passengerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        confirmEmail: ['', Validators.required],
      }, {validator: emailMatch}),
      phone: '',
      notification: 'email'
    });

    this.passengerForm.get('notification').valueChanges.subscribe(
      value => this.setNotification(value)
    );
  }

  populateData(): void {
    this.passengerForm.patchValue({
      firstName: 'Japhet',
      lastName: 'Sebastian',
      sendCatalog: false
    });
  }

  save() {
    console.log(this.passengerForm);
    console.log('Saved: ' + JSON.stringify(this.passengerForm.value));
  }

  // adjusting validation rules at runtime 
  setNotification(notifyVia: string): void {
    const phoneControl = this.passengerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl.setValidators(Validators.required);
    } 
    else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

}
