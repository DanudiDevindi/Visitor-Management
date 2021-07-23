import { TestBed } from '@angular/core/testing';

import { BuildingServiceService } from './building-service.service';

describe('BuildingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuildingServiceService = TestBed.get(BuildingServiceService);
    expect(service).toBeTruthy();
  });
});
