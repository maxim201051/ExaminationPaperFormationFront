import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {StudentInfoCard} from '../../core/models/student-info-card';
import {TeacherService} from '../../core/services/teacher.service';
import {MatPaginator} from '@angular/material/paginator';
import {HttpErrorResponse} from '@angular/common/http';
import {TeacherInfoCard} from '../../core/models/teacher-info-card';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'position', 'academicDegree', 'academicStatus'];
  public dataSource!: MatTableDataSource<TeacherInfoCard>;

  constructor(private teacherService: TeacherService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllTeachers();
  }

  getAllTeachers(): void {
    this.teacherService.getAllTeachers().subscribe(
      (response: TeacherInfoCard[]) => {
        this.dataSource = new MatTableDataSource<TeacherInfoCard>(
          response.sort((a, b) => ((a.lastName != null ? a.lastName : '') > (b.lastName != null ? b.lastName : '')) ? 1 : -1));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
