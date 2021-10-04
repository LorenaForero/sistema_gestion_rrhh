import { TestBed } from '@angular/core/testing';

import { PeticionesServicioService } from './peticiones-servicio.service';

describe('PeticionesServicioService', () => {
  let service: PeticionesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeticionesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
