import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AdminHelpRequest} from '../models/admin-help-request';

@Injectable({
  providedIn: 'root'
})
export class AdminHelpRequestService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public getAllAdminHelpRequests(): Observable<AdminHelpRequest[]> {
    return this.http.get<AdminHelpRequest[]>(`${this.apiServerUrl}/admin/admin-help-request/all`);
  }

  public getAdminHelpRequestById(adminHelpRequestId: number): Observable<AdminHelpRequest> {
    return this.http.get<AdminHelpRequest>(`${this.apiServerUrl}/admin/admin-help-request/${adminHelpRequestId}`);
  }

  public addAdminHelpRequest(adminHelpRequest: AdminHelpRequest): Observable<AdminHelpRequest> {
    return this.http.post<AdminHelpRequest>(`${this.apiServerUrl}/general/admin-help-request`, adminHelpRequest);
  }

  public updateAdminHelpRequest(adminHelpRequest: AdminHelpRequest): Observable<AdminHelpRequest> {
    return this.http.put<AdminHelpRequest>(`${this.apiServerUrl}/admin/admin-help-request`, adminHelpRequest);
  }
}
