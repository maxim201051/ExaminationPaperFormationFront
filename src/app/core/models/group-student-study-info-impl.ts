import {GroupStudentStudyInfo} from './group-student-study-info';
import {EducationalDegree} from '../enums/educational-degree.enum';
import {EducationForm} from '../enums/education-form.enum';
import {StringNumberPair} from './string-number-pair';
import {StringNumberPairImpl} from './string-number-pair-impl';

export class GroupStudentStudyInfoImpl implements GroupStudentStudyInfo {
  course: number | null;
  educationalDegree: EducationalDegree | null;
  knowledgeBranch: string | null;
  speciality: string | null;
  specialization: string | null;
  educationForm: EducationForm | null;
  startOfStudy: Date | null;
  graduated: boolean | null;
  endOfStudy: Date | null;
  curator: StringNumberPair;

  constructor() {
    this.course = null;
    this.educationalDegree = null;
    this.knowledgeBranch = null;
    this.speciality = null;
    this.specialization = null;
    this.educationForm = null;
    this.startOfStudy = null;
    this.graduated = null;
    this.endOfStudy = null;
    this.curator = new StringNumberPairImpl();
  }
}
