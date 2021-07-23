import { TestBed } from '@angular/core/testing';

import { SystemEmployeeService } from './system-employee.service';

describe('SystemUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SystemEmployeeService = TestBed.get(SystemEmployeeService);
    expect(service).toBeTruthy();
  });
});
