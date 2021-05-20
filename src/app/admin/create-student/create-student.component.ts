import {Component, OnInit} from '@angular/core';
import {StudentUserImpl} from '../../core/models/student-user-impl';
import {Role} from '../../core/enums/role.enum';
import {StringNumberPair} from '../../core/models/string-number-pair';
import {GroupService} from '../../core/services/group.service';
import {NavigationExtras, Router} from '@angular/router';
import {StudentService} from '../../core/services/student.service';
import {HttpErrorResponse} from '@angular/common/http';
import {StudentInfoCard} from '../../core/models/student-info-card';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentUser: StudentUserImpl = new StudentUserImpl();
  groups: StringNumberPair[] = [];

  constructor(private groupService: GroupService, private studentService: StudentService, private router: Router) {
  }

  ngOnInit(): void {
    this.studentUser.user.authority = Role.STUDENT;
    this.groupService.getAllGroupsInNameIdFormat().subscribe(
      (response: StringNumberPair[]) => {
        this.groups = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createStudent(): void {
    this.studentService.addStudent(this.studentUser).subscribe(
      (response: StudentInfoCard) => {
        this.router.navigate(['/general/student'], {queryParams: { id: response }});
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
