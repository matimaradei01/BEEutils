import { TestBed } from '@angular/core/testing';

import { GeneradorCreateService } from './generador-create.service';

describe('GeneradorCreateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneradorCreateService = TestBed.get(GeneradorCreateService);
    expect(service).toBeTruthy();
  });
});
