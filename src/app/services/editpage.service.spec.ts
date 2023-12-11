import { TestBed } from '@angular/core/testing';

import { EditpageService } from './editpage.service';

describe('EditpageService', () => {
  let service: EditpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
