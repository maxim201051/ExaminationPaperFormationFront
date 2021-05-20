import {Component, Input, OnInit} from '@angular/core';
import {PersonInfoCard} from '../../core/models/person-info-card';
import {PersonInfoCardImpl} from '../../core/models/person-info-card-impl';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {
  @Input()
  public person: PersonInfoCard = new PersonInfoCardImpl();

  constructor() { }

  ngOnInit(): void {
  }

}
