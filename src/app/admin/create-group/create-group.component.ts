import { Component, OnInit } from '@angular/core';
import {Group} from '../../core/models/group';
import {GroupImpl} from '../../core/models/group-impl';
import {Router} from '@angular/router';
import {GroupService} from '../../core/services/group.service';
import {Utils} from '../../core/Utils/utils';
import {EducationalDegree} from '../../core/enums/educational-degree.enum';
import {EducationForm} from '../../core/enums/education-form.enum';
import {StringNumberPair} from '../../core/models/string-number-pair';
import {TeacherService} from '../../core/services/teacher.service';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  group: GroupImpl = new GroupImpl();
  educationalDegrees: string[] = Utils.MapEnumToArray(EducationalDegree);
  educationForms: string[] = Utils.MapEnumToArray(EducationForm);
  teachers: StringNumberPair[] = [];

  constructor(private router: Router, private groupService: GroupService, private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.group.studyInfo.graduated = false;
    this.teacherService.getAllTeachersInNameIdFormat().subscribe(
      (response: StringNumberPair[]) => {
        this.teachers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  createGroup(): void {
    this.groupService.addGroup(this.group).subscribe(
      (response: Group) => {
        this.router.navigate(['/general/group'], {queryParams: { id: response }});
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
