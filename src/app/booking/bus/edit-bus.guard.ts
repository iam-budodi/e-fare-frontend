import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditBusComponent } from './edit-bus/edit-bus.component';

@Injectable({
  providedIn: 'root'
})
export class EditBusGuard implements CanDeactivate<EditBusComponent> {
  canDeactivate(component: EditBusComponent): Observable<boolean> | Promise<boolean> | boolean {
    if(component.busForm.dirty) {
      const busName = component.busForm.get('busName').value || 'New Bus';
      return confirm(`Navigate away and loose all changes to ${busName}?`);
    }
    return true;
  }
  
}
