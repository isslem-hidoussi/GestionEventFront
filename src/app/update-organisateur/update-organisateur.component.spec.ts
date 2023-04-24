import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganisateurComponent } from './update-organisateur.component';

describe('UpdateOrganisateurComponent', () => {
  let component: UpdateOrganisateurComponent;
  let fixture: ComponentFixture<UpdateOrganisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrganisateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateOrganisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
