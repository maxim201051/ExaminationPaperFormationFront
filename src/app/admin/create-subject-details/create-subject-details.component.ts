import { Component, OnInit } from '@angular/core';
import {SubjectDetails} from '../../core/models/subject-details';
import {SubjectDetailsImpl} from '../../core/models/subject-details-impl';
import {Router} from '@angular/router';
import {SubjectDetailsService} from '../../core/services/subject-details.service';
import {TeacherService} from '../../core/services/teacher.service';
import {StringNumberPair} from '../../core/models/string-number-pair';
import {HttpErrorResponse} from '@angular/common/http';
import {Utils} from '../../core/Utils/utils';
import {ControlForm} from '../../core/enums/control-form.enum';
import {SubjectService} from '../../core/services/subject.service';

@Component({
  selector: 'app-create-subject-details',
  templateUrl: './create-subject-details.component.html',
  styleUrls: ['./create-subject-details.component.css']
})
export class CreateSubjectDetailsComponent implements OnInit {
  subjectDetails: SubjectDetails = new SubjectDetailsImpl();
  subjects: StringNumberPair[] = [];
  teachers: StringNumberPair[] = [];
  controlForms: string[] = Utils.MapEnumToArray(ControlForm);

  constructor(private router: Router, private subjectDetailsService: SubjectDetailsService,
              private teacherService: TeacherService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.teacherService.getAllTeachersInNameIdFormat().subscribe(
      (response: StringNumberPair[]) => {
        this.teachers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.subjectService.getAllSubjects().subscribe(
      (response: StringNumberPair[]) => {
        this.subjects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createSubjectDetails(): void {
    this.subjectDetailsService.addSubject(this.subjectDetails).subscribe();
    this.subjectDetails = new SubjectDetailsImpl();
  }

  setHasCourseWork(event: any): void {
    this.subjectDetails.hasCourseWork = event.checked;
  }
}
