import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Group} from '../../core/models/group';
import {SubjectDetails} from '../../core/models/subject-details';
import {MatPaginator} from '@angular/material/paginator';
import {SubjectDetailsService} from '../../core/services/subject-details.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-subject-details-list',
  templateUrl: './subject-details-list.component.html',
  styleUrls: ['./subject-details-list.component.css']
})
export class SubjectDetailsListComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'creditNumber', 'totalHours', 'lecturesHours', 'practiceHours', 'labWorkHours',
    'selfAndControlWorkHours', 'controlForm', 'hasCourseWork', 'responsibleTeacher', 'edit'];
  public dataSource!: MatTableDataSource<SubjectDetails>;

  constructor(private subjectDetailsService: SubjectDetailsService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.getAllSubjectDetails();
  }

  getAllSubjectDetails(): void {
    this.subjectDetailsService.getAllSubjectDetails().subscribe(
      (response: SubjectDetails[]) => {
        this.dataSource = new MatTableDataSource<SubjectDetails>(
          response.sort((a, b) => ((a.subject.key != null ? a.subject.key : '') > (b.subject.key != null ? b.subject.key : '')) ? 1 : -1));
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
