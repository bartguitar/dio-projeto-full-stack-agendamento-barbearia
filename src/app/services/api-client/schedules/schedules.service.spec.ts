import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SchedulesService } from './schedules.service';

describe('SchedulesService', () => {
  let service: SchedulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SchedulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
