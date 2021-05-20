import {Component, Input, OnInit} from '@angular/core';
import {UserImpl} from '../../core/models/user-impl';
import {User} from '../../core/models/user';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  @Input()
  public user: User = new UserImpl();
  constructor() { }

  ngOnInit(): void {
  }

}
