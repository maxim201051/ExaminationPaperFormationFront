import {GroupStudentStudyInfo} from './group-student-study-info';

export interface Group {
  id: number | null;
  groupNumber: string | null;
  studyInfo: GroupStudentStudyInfo;
  students: Map<string, number>;
}
