import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExaminationPaperComponent } from './examination-paper.component';

describe('ExaminationPaperComponent', () => {
  let component: ExaminationPaperComponent;
  let fixture: ComponentFixture<ExaminationPaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExaminationPaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExaminationPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
