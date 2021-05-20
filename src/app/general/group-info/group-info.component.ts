import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GroupService} from '../../core/services/group.service';
import {GroupImpl} from '../../core/models/group-impl';
import {Group} from '../../core/models/group';
import {StudentInfoCard} from '../../core/models/student-info-card';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.component.html',
  styleUrls: ['./group-info.component.css']
})
export class GroupInfoComponent implements OnInit {
  public group: Group = new GroupImpl();

  constructor(private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.groupService.getGroupById(params.id).subscribe(
          (response: Group) => {
            this.group = response;
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          }
        );
      }
    );
  }

}
