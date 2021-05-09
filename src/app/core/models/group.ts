import {GroupStudentStudyInfo} from './group-student-study-info';

export interface Group {
  id: number;
  groupNumber: string;
  studyInfo: GroupStudentStudyInfo;
  students: Map<string, number>;
}
