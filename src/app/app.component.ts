import {Component, OnInit} from '@angular/core';
import {AuthService} from './core/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit */{
  title = 'ExaminationPaperFormationFront';
  isAuthenticated = false;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.authenticate(undefined, undefined);
    /* this.authService.isAuthenticated.subscribe(
       (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
     );*/
  }

  /*async ngOnInit(): Promise<void> {
    this.isAuthenticated = await this.authService.checkAuthenticated();
  }*/

  logout(): void {
    this.authService.logout().subscribe(() => {
        this.router.navigateByUrl('/login');
      }
    );
  }
}
