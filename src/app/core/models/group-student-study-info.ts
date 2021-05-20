import {EducationalDegree} from '../enums/educational-degree.enum';
import {EducationForm} from '../enums/education-form.enum';
import {StringNumberPair} from './string-number-pair';

export interface GroupStudentStudyInfo {
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
}
