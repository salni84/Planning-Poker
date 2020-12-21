import { TestBed } from '@angular/core/testing';

import { ConnectinoService } from './connection.service';

describe('ConnectinoService', () => {
  let service: ConnectinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
