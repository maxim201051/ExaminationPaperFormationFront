import {ControlForm} from '../enums/control-form.enum';
import {StringNumberPair} from './string-number-pair';
import {StudentDisciplineRecord} from './student-discipline-record';

export interface ExaminationPaper {
  id: number;
  speciality: string;
  specialization: string;
  educationalYear: string;
  course: number;
  semester: number;
  controlForm: ControlForm;
  responsibleTeacher: StringNumberPair;
  group: StringNumberPair;
  subject: StringNumberPair;
  rows: StudentDisciplineRecord[];
  controlDate: Date;
}
