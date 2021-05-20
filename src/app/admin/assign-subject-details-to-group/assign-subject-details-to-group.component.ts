import { Component, OnInit } from '@angular/core';
import {SubjectDetails} from '../../core/models/subject-details';
import {StringNumberPair} from '../../core/models/string-number-pair';
import {GroupService} from '../../core/services/group.service';
import {SubjectDetailsService} from '../../core/services/subject-details.service';
import {HttpErrorResponse} from '@angular/common/http';
import {GroupToSubjectRel} from '../../core/models/group-to-subject-rel';
import {GroupToSubjectRelImpl} from '../../core/models/group-to-subject-rel-impl';
import {Group} from '../../core/models/group';
import {Router} from '@angular/router';

@Component({
  selector: 'app-assign-subject-details-to-group',
  templateUrl: './assign-subject-details-to-group.component.html',
  styleUrls: ['./assign-subject-details-to-group.component.css']
})
export class AssignSubjectDetailsToGroupComponent implements OnInit {
  subjectDetails: SubjectDetails[] = [];
  groups: StringNumberPair[] = [];
  groupToSubjectRel: GroupToSubjectRelImpl = new GroupToSubjectRelImpl();
  constructor(private groupService: GroupService, private subjectDetailsService: SubjectDetailsService,
              private router: Router) { }

  ngOnInit(): void {
    this.groupService.getAllGroupsInNameIdFormat().subscribe(
      (response: StringNumberPair[]) => {
        this.groups = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
    this.subjectDetailsService.getAllSubjectDetails().subscribe(
      (response: SubjectDetails[]) => {
        this.subjectDetails = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  assignSubjectToGroup(): void {
    this.subjectDetailsService.assignSubjectDetailsToGroup(this.groupToSubjectRel).subscribe(
      (response: Group) => {
        this.router.navigate(['/general/group'], {queryParams: { id: response }});
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
