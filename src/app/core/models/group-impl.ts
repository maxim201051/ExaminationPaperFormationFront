import {GroupStudentStudyInfo} from './group-student-study-info';
import {Group} from './group';
import {GroupStudentStudyInfoImpl} from './group-student-study-info-impl';

export class GroupImpl implements Group {
  id: number | null;
  groupNumber: string | null;
  studyInfo: GroupStudentStudyInfo;
  students: Map<string, number>;

  constructor() {
    this.id = null;
    this.groupNumber = null;
    this.studyInfo = new GroupStudentStudyInfoImpl();
    this.students = new Map<string, number>();
  }
}
