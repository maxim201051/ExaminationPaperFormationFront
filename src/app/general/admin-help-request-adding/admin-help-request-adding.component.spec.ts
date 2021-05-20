import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHelpRequestAddingComponent } from './admin-help-request-adding.component';

describe('AdminHelpRequestAddingComponent', () => {
  let component: AdminHelpRequestAddingComponent;
  let fixture: ComponentFixture<AdminHelpRequestAddingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminHelpRequestAddingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHelpRequestAddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
