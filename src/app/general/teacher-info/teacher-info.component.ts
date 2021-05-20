import {Component, Injectable, Input, OnInit} from '@angular/core';
import {TeacherInfoCard} from '../../core/models/teacher-info-card';
import {TeacherInfoCardImpl} from '../../core/models/teacher-info-card-impl';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {TeacherService} from '../../core/services/teacher.service';
import {switchMap} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';
import {StudentInfoCard} from '../../core/models/student-info-card';

@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {
  public teacher: TeacherInfoCard = new TeacherInfoCardImpl();
  constructor(private route: ActivatedRoute, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.teacherService.getTeacherById(params.id).subscribe(
          (response: TeacherInfoCard) => {
            this.teacher = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    );
  }
}
