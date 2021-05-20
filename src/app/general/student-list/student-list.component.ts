import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {StudentInfoCard} from '../../core/models/student-info-card';
import {StudentService} from '../../core/services/student.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['name', 'course', 'group'];
  public dataSource!: MatTableDataSource<StudentInfoCard>;

  constructor(private studentService: StudentService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents(): void {
    this.studentService.getAllStudents().subscribe(
      (response: StudentInfoCard[]) => {
        this.dataSource = new MatTableDataSource<StudentInfoCard>(
          response.sort((a, b) => ((a.lastName != null ? a.lastName : '') > (b.lastName != null ? b.lastName : '')) ? 1 : -1));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
