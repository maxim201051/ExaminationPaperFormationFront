import {StringNumberPair} from './string-number-pair';
import {ControlForm} from '../enums/control-form.enum';

export interface SubjectDetails {
  id: number | null;
  totalHours: number | null;
  lecturesHours: number | null;
  practiceHours: number | null;
  labWorkHours: number | null;
  selfAndControlWorkHours: number | null;
  responsibleTeacher: StringNumberPair;
  hasCourseWork: boolean;
  subject: StringNumberPair;
  controlForm: ControlForm | null;
  creditNumber: number | null;
}
