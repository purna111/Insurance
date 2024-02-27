import { TestBed } from '@angular/core/testing';

import { FormSubmitDataService } from './form-submit-data.service';

describe('FormSubmitDataService', () => {
  let service: FormSubmitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormSubmitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
