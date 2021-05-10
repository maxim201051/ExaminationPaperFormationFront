import {TestBed} from '@angular/core/testing';

import {ExaminationPaperService} from './examination-paper.service';

describe('ExaminationPaperService', () => {
  let service: ExaminationPaperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExaminationPaperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
