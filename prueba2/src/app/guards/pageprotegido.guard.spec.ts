import { TestBed } from '@angular/core/testing';

import { PageprotegidoGuard } from './pageprotegido.guard';

describe('PageprotegidoGuard', () => {
  let guard: PageprotegidoGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PageprotegidoGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
