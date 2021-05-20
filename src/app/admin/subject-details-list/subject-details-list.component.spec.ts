import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectDetailsListComponent } from './subject-details-list.component';

describe('SubjectDetailsListComponent', () => {
  let component: SubjectDetailsListComponent;
  let fixture: ComponentFixture<SubjectDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectDetailsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
