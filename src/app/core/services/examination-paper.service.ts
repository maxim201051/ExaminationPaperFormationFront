import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {ControlForm} from '../enums/control-form.enum';
import {Observable} from 'rxjs';
import {ExaminationPaper} from '../models/examination-paper';

@Injectable({
  providedIn: 'root'
})
export class ExaminationPaperService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {
  }

  public findExaminationPaper(groupId: number, subjectDetailsId: number, semester: number, type: ControlForm)
    : Observable<ExaminationPaper> {
    return this.http.get<ExaminationPaper>(`${this.apiServerUrl}/teacher/examination-paper/?groupId=${groupId}
    &subjectDetailsId=${subjectDetailsId}&semester=${semester}&type=${type}`);
  }

  public updateExaminationPaper(examinationPaper: ExaminationPaper): Observable<ExaminationPaper> {
    return this.http.put<ExaminationPaper>(`${this.apiServerUrl}/teacher/examination-paper`, examinationPaper);
  }
}
