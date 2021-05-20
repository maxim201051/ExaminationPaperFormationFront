import {GroupToSubjectRel} from './group-to-subject-rel';
import {StringNumberPair} from './string-number-pair';
import {StringNumberPairImpl} from './string-number-pair-impl';

export class GroupToSubjectRelImpl implements GroupToSubjectRel{
  group: StringNumberPair;
  subject: StringNumberPair;
  semester: number | null;

  constructor() {
    this.group = new StringNumberPairImpl();
    this.subject = new StringNumberPairImpl();
    this.semester = null;
  }
}
