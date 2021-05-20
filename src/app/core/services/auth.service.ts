import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { finalize } from 'rxjs/operators';
import {Credentials} from '../models/credentials';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiServerUrl = environment.apiServerUrl;

  isAuthenticated = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials: Credentials | undefined, callback: (() => any) | undefined): void {

    const headers = new HttpHeaders(credentials ? {
      authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get<User>(
      `${this.apiServerUrl}/general/user`, {headers}).subscribe((response: User) => {
      this.isAuthenticated = !!response.username;
      return callback && callback();
    });
  }

  logout(): any {
    return this.http.post(`${this.apiServerUrl}/logout`, {}).pipe(finalize(() => {
      this.isAuthenticated = false;
    }));
  }
}
