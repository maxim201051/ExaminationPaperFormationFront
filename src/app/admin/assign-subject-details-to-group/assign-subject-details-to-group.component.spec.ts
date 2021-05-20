import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSubjectDetailsToGroupComponent } from './assign-subject-details-to-group.component';

describe('AssignSubjectDetailsToGroupComponent', () => {
  let component: AssignSubjectDetailsToGroupComponent;
  let fixture: ComponentFixture<AssignSubjectDetailsToGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignSubjectDetailsToGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSubjectDetailsToGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
