export interface PersonInfoCard {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  patronymic: string | null;
  contactEmails: string[];
  contactPhones: string[];
  otherContactInfo: string | null;
  accountId: number | null;
}
