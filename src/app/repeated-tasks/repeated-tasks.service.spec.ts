import { TestBed } from '@angular/core/testing';

import { RepeatedTasksService } from './repeated-tasks.service';

describe('RepeatedTasksService', () => {
  let service: RepeatedTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepeatedTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
