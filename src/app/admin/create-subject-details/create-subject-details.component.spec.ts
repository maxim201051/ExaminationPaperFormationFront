import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubjectDetailsComponent } from './create-subject-details.component';

describe('CreateSubjectDetailsComponent', () => {
  let component: CreateSubjectDetailsComponent;
  let fixture: ComponentFixture<CreateSubjectDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubjectDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubjectDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
