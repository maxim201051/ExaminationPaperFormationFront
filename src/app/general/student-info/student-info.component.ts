import {Component, OnInit} from '@angular/core';
import {StudentInfoCard} from '../../core/models/student-info-card';
import {HttpErrorResponse} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {StudentService} from '../../core/services/student.service';
import {StudentInfoCardImpl} from '../../core/models/student-info-card-impl';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
  public student: StudentInfoCard = new StudentInfoCardImpl();

  constructor(private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.studentService.getStudentById(params.id).subscribe(
          (response: StudentInfoCard) => {
            this.student = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
    }
    );
  }
}
