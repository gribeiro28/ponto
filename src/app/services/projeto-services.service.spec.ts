import { TestBed } from '@angular/core/testing';

import { ProjetoServices } from './projeto-services.service';

describe('ProjetoServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjetoServices = TestBed.get(ProjetoServices);
    expect(service).toBeTruthy();
  });
});
