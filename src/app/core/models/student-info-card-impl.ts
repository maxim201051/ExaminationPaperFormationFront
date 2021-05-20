import {StudentInfoCard} from './student-info-card';
import {StringNumberPair} from './string-number-pair';
import {GroupStudentStudyInfo} from './group-student-study-info';
import {GroupStudentStudyInfoImpl} from './group-student-study-info-impl';
import {StringNumberPairImpl} from './string-number-pair-impl';
import {PersonInfoCardImpl} from './person-info-card-impl';

export class StudentInfoCardImpl extends PersonInfoCardImpl implements StudentInfoCard {
  group: StringNumberPair;
  studentCode: string | null;
  studyInfo: GroupStudentStudyInfo;

  constructor() {
    super();
    this.group = new StringNumberPairImpl();
    this.studentCode = null;
    this.studyInfo = new GroupStudentStudyInfoImpl();
  }
}
