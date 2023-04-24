import { TestBed } from '@angular/core/testing';

import { OrganisateurServiceService } from './organisateur-service.service';

describe('OrganisateurServiceService', () => {
  let service: OrganisateurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganisateurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
