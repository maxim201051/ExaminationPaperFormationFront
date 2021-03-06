import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Group} from '../models/group';
import {StringNumberPair} from '../models/string-number-pair';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.apiServerUrl}/general/group/all`);
  }

  public getAllGroupsInNameIdFormat(): Observable<StringNumberPair[]> {
    return this.http.get<StringNumberPair[]>(`${this.apiServerUrl}/admin/group/all-pair`);
  }

  public getGroupById(groupId: number): Observable<Group> {
    return this.http.get<Group>(`${this.apiServerUrl}/general/group/${groupId}`);
  }

  public addGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.apiServerUrl}/admin/group`, group);
  }

  public updateTeacher(group: Group): Observable<Group> {
    return this.http.put<Group>(`${this.apiServerUrl}/admin/group`, group);
  }
}
