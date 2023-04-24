import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganisateurComponent } from './add-organisateur.component';

describe('AddOrganisateurComponent', () => {
  let component: AddOrganisateurComponent;
  let fixture: ComponentFixture<AddOrganisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrganisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
