import {EducationalDegree} from '../enums/educational-degree.enum';
import {EducationForm} from '../enums/education-form.enum';
import {StringNumberPair} from './string-number-pair';

export interface GroupStudentStudyInfo {
  course: number;
  educationalDegree: EducationalDegree;
  knowledgeBranch: string;
  speciality: string;
  specialization: string;
  educationForm: EducationForm;
  startOfStudy: Date;
  graduated: boolean;
  endOfStudy: Date;
  curator: StringNumberPair;
}
