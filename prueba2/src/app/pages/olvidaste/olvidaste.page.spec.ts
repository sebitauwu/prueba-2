import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlvidastePage } from './olvidaste.page';

describe('OlvidastePage', () => {
  let component: OlvidastePage;
  let fixture: ComponentFixture<OlvidastePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OlvidastePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
