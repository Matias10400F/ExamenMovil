import { TestBed } from '@angular/core/testing';

import { UsuarioListJsonService } from './usuario-list-json.service';

describe('UsuarioListJsonService', () => {
  let service: UsuarioListJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioListJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
