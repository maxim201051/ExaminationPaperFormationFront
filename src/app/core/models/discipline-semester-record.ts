import {RecordBookRecord} from './record-book-record';
import {StringNumberPair} from './string-number-pair';
import {SubjectDetails} from './subject-details';
import {ControlForm} from '../enums/control-form.enum';

export interface DisciplineSemesterRecord extends RecordBookRecord {
  controlForm: ControlForm;
  subject: SubjectDetails;
  signedTeacher: StringNumberPair;
  passedAtSemester: number;
}
