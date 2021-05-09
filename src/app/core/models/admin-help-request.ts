import {StringNumberPair} from './string-number-pair';

export interface AdminHelpRequest {
  id: number;
  sender: StringNumberPair;
  requestText: string;
  creationDate: Date;
  resolved: boolean;
}
