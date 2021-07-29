import { TestBed } from '@angular/core/testing';

import { CarroService } from './carro.service';

describe('CarroService', () => {
  let service: CarroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
