import {StringNumberPair} from './string-number-pair';
import {ControlForm} from '../enums/control-form.enum';

export interface SubjectDetails {
  id: number;
  totalHours: number;
  lecturesHours: number;
  practiceHours: number;
  labWorkHours: number;
  selfAndControlWorkHours: number;
  responsibleTeacher: StringNumberPair;
  hasCourseWork: boolean;
  subject: StringNumberPair;
  controlForm: ControlForm;
  creditNumber: number;
}
