import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisateurPageComponent } from './organisateur-page.component';

describe('OrganisateurPageComponent', () => {
  let component: OrganisateurPageComponent;
  let fixture: ComponentFixture<OrganisateurPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisateurPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisateurPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
