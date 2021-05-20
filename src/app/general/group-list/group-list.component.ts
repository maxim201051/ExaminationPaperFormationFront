import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GroupService} from '../../core/services/group.service';
import {MatPaginator} from '@angular/material/paginator';
import {HttpErrorResponse} from '@angular/common/http';
import {Group} from '../../core/models/group';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'course', 'educationalDegree', 'educationForm'];
  public dataSource!: MatTableDataSource<Group>;

  constructor(private groupService: GroupService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllGroups();
  }

  getAllGroups(): void {
    this.groupService.getAllGroups().subscribe(
      (response: Group[]) => {
        this.dataSource = new MatTableDataSource<Group>(
          response.sort((a, b) => ((a.groupNumber != null ? a.groupNumber : '') > (b.groupNumber != null ? b.groupNumber : '')) ? 1 : -1));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
