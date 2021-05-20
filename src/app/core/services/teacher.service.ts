import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeacherInfoCard} from '../models/teacher-info-card';
import {TeacherUser} from '../models/teacher-user';
import {GroupToSubjectRel} from '../models/group-to-subject-rel';
import {StudentInfoCard} from '../models/student-info-card';
import {StringNumberPair} from '../models/string-number-pair';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllTeachers(): Observable<TeacherInfoCard[]> {
    return this.http.get<TeacherInfoCard[]>(`${this.apiServerUrl}/general/teacher/all`);
  }

  public getAllTeachersInNameIdFormat(): Observable<StringNumberPair[]> {
    return this.http.get<StringNumberPair[]>(`${this.apiServerUrl}/admin/teacher/all-pair`);
  }

  public getTeacherById(teacherId: number): Observable<TeacherInfoCard> {
    return this.http.get<TeacherInfoCard>(`${this.apiServerUrl}/general/teacher/${teacherId}`);
  }

  public addTeacher(teacherAndAccount: TeacherUser): Observable<TeacherInfoCard> {
    return this.http.post<TeacherInfoCard>(`${this.apiServerUrl}/admin/teacher`, teacherAndAccount);
  }

  public updateTeacher(teacher: TeacherInfoCard): Observable<TeacherInfoCard> {
    return this.http.put<TeacherInfoCard>(`${this.apiServerUrl}/admin/teacher`, teacher);
  }

  public findAllGroupsWhereCurrentTeacherTaught(): Observable<GroupToSubjectRel> {
    return this.http.get<GroupToSubjectRel>(`${this.apiServerUrl}/teacher/taught-groups`);
  }

  public findCurrentTeacher(): Observable<TeacherInfoCard> {
    return this.http.get<TeacherInfoCard>(`${this.apiServerUrl}/teacher/my-info`);
  }
}
