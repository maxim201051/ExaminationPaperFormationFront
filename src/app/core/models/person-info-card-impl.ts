import {PersonInfoCard} from './person-info-card';

export class PersonInfoCardImpl implements PersonInfoCard{
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  patronymic: string | null;
  contactEmails: string[];
  contactPhones: string[];
  otherContactInfo: string | null;
  accountId: number | null;

  constructor() {
    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.patronymic = null;
    this.contactEmails = [];
    this.contactPhones = [];
    this.otherContactInfo = null;
    this.accountId = null;
  }
}
