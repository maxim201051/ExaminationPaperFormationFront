import {TestBed} from '@angular/core/testing';

import {AdminHelpRequestService} from './admin-help-request.service';

describe('AdminHelpRequestService', () => {
  let service: AdminHelpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminHelpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
