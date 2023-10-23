import { TestBed } from '@angular/core/testing';

import { seccionsserviceService } from './seccionesservice.service';

describe('SeccionserviceService', () => {
  let service: seccionsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(seccionsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
