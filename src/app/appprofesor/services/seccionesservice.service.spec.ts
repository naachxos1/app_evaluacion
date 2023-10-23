import { TestBed } from '@angular/core/testing';

import { seccionesserviceService } from 'src/app/appprofesor/services/resecciones';

describe('SeccionserviceService', () => {
  let service: seccionesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(seccionesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
