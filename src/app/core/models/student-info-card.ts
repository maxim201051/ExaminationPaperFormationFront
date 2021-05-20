import {PersonInfoCard} from './person-info-card';
import {StringNumberPair} from './string-number-pair';
import {GroupStudentStudyInfo} from './group-student-study-info';

export interface StudentInfoCard extends PersonInfoCard {
  group: StringNumberPair;
  studentCode: string | null;
  studyInfo: GroupStudentStudyInfo;
}
