import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentInfoCard} from '../models/student-info-card';
import {StudentUser} from '../models/student-user';
import {RecordBookRecord} from '../models/record-book-record';
import {SubjectDetails} from '../models/subject-details';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllStudents(): Observable<StudentInfoCard[]> {
    return this.http.get<StudentInfoCard[]>(`${this.apiServerUrl}/general/student/all`);
  }

  public getStudentById(studentId: number): Observable<StudentInfoCard> {
    return this.http.get<StudentInfoCard>(`${this.apiServerUrl}/general/student/${studentId}`);
  }

  public addStudent(studentAndAccount: StudentUser): Observable<StudentInfoCard> {
    return this.http.post<StudentInfoCard>(`${this.apiServerUrl}/admin/student`, studentAndAccount);
  }

  public updateStudent(student: StudentInfoCard): Observable<StudentInfoCard> {
    return this.http.put<StudentInfoCard>(`${this.apiServerUrl}/admin/student`, student);
  }

  public findCurrentStudentRecordBookRecords(): Observable<RecordBookRecord> {
    return this.http.get<RecordBookRecord>(`${this.apiServerUrl}/student/record-book`);
  }

  public findCurrentStudentStudiedDisciplines(): Observable<SubjectDetails> {
    return this.http.get<SubjectDetails>(`${this.apiServerUrl}/student/my-disciplines`);
  }

  public findCurrentStudent(): Observable<StudentInfoCard> {
    return this.http.get<StudentInfoCard>(`${this.apiServerUrl}/student/my-info`);
  }
}
