import {Component, OnInit} from '@angular/core';
import {Position} from '../../core/enums/position.enum';
import {TeacherUserImpl} from '../../core/models/teacher-user-impl';
import {AcademicDegree} from '../../core/enums/academic-degree.enum';
import {AcademicStatus} from '../../core/enums/academic-status.enum';
import {Utils} from '../../core/Utils/utils';
import {Router} from '@angular/router';
import {TeacherService} from '../../core/services/teacher.service';
import {Role} from '../../core/enums/role.enum';
import {TeacherInfoCard} from '../../core/models/teacher-info-card';
import {HttpErrorResponse} from '@angular/common/http';
import {TeacherUser} from '../../core/models/teacher-user';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './create-teacher.component.html',
  styleUrls: ['./create-teacher.component.css']
})
export class CreateTeacherComponent implements OnInit {
  teacherUser: TeacherUser = new TeacherUserImpl();
  positions: string[] = Utils.MapEnumToArray(Position);
  academicDegrees: string[] = Utils.MapEnumToArray(AcademicDegree);
  academicStatuses: string[] = Utils.MapEnumToArray(AcademicStatus);

  constructor(private router: Router, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherUser.user.authority = Role.TEACHER;
    this.teacherUser.teacher.dismissed = false;
  }

  createTeacher(): void {
    this.teacherUser.teacher.hiringDate = new Date();
    this.teacherService.addTeacher(this.teacherUser).subscribe(
      (response: TeacherInfoCard) => {
        this.router.navigate(['/general/teacher'], { queryParams: { id: response }});
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
