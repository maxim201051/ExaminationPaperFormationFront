import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StringNumberPair} from '../models/string-number-pair';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllSubjects(): Observable<StringNumberPair[]> {
    return this.http.get<StringNumberPair[]>(`${this.apiServerUrl}/admin/subject/all`);
  }

  public addSubject(subject: StringNumberPair): Observable<StringNumberPair[]> {
    return this.http.post<StringNumberPair[]>(`${this.apiServerUrl}/admin/subject`, subject);
  }

  public updateSubject(subject: StringNumberPair): Observable<StringNumberPair[]> {
    return this.http.put<StringNumberPair[]>(`${this.apiServerUrl}/admin/subject`, subject);
  }
}
