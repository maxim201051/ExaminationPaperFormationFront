import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SubjectDetails} from '../models/subject-details';
import {GroupToSubjectRel} from '../models/group-to-subject-rel';
import {Group} from '../models/group';

@Injectable({
  providedIn: 'root'
})
export class SubjectDetailsService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllSubjectDetails(): Observable<SubjectDetails[]> {
    return this.http.get<SubjectDetails[]>(`${this.apiServerUrl}/admin/subject-details/all`);
  }

  public addSubject(subjectDetails: SubjectDetails): Observable<SubjectDetails> {
    return this.http.post<SubjectDetails>(`${this.apiServerUrl}/admin/subject-details`, subjectDetails);
  }

  public updateSubject(subjectDetails: SubjectDetails): Observable<SubjectDetails> {
    return this.http.put<SubjectDetails>(`${this.apiServerUrl}/admin/subject-details`, subjectDetails);
  }

  public assignSubjectDetailsToGroup(groupToSubjectRel: GroupToSubjectRel): Observable<Group> {
    return this.http.post<Group>(`${this.apiServerUrl}/admin/assign-subject-details-to-group`, groupToSubjectRel);
  }
}
