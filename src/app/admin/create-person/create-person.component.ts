import {Component, Input, OnInit} from '@angular/core';
import {PersonInfoCardImpl} from '../../core/models/person-info-card-impl';
import {PersonInfoCard} from '../../core/models/person-info-card';

@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.css']
})
export class CreatePersonComponent implements OnInit {
  @Input()
  person: PersonInfoCard = new PersonInfoCardImpl();
  contactEmail = '';
  contactPhone = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  addContactEmail(): void {
    if (this.contactEmail !== '') {
      this.person.contactEmails.push(this.contactEmail);
      this.contactEmail = '';
    }
  }

  addContactPhone(): void {
    if (this.contactPhone !== '') {
      this.person.contactPhones.push(this.contactPhone);
      this.contactPhone = '';
    }
  }
}
