import { TestBed } from '@angular/core/testing';

import { EditBusGuard } from './edit-bus.guard';

describe('EditBusGuard', () => {
  let guard: EditBusGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditBusGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
