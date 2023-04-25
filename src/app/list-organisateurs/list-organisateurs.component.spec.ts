import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOrganisateursComponent } from './list-organisateurs.component';

describe('ListOrganisateursComponent', () => {
  let component: ListOrganisateursComponent;
  let fixture: ComponentFixture<ListOrganisateursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListOrganisateursComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOrganisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
