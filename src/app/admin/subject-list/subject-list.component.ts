import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../../core/services/subject.service';
import {StringNumberPair} from '../../core/models/string-number-pair';
import {HttpErrorResponse} from '@angular/common/http';
import {StringNumberPairImpl} from '../../core/models/string-number-pair-impl';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  subjects: StringNumberPair[] = [];

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getAllSubjects().subscribe(
      (response: StringNumberPair[]) => {
        this.subjects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  addSubjectClick(): void {
    const newSubject = prompt('Please enter subject name');
    if (newSubject != null) {
      this.createSubject(newSubject);
    }
  }

  createSubject(newSubject: string): void {
    this.subjectService.addSubject(newSubject).subscribe(
      (response: StringNumberPair[]) => {
        this.subjects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
