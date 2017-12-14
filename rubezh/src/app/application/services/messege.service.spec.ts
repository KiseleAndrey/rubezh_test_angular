import { TestBed, inject } from '@angular/core/testing';

import { MessegeService } from './messege.service';

describe('MessegeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessegeService]
    });
  });

  it('should be created', inject([MessegeService], (service: MessegeService) => {
    expect(service).toBeTruthy();
  }));
});
