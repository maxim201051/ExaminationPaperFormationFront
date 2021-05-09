import {RecordBookRecord} from './record-book-record';
import {ControlForm} from '../enums/control-form.enum';
import {StringNumberPair} from './string-number-pair';
import {SubjectDetails} from './subject-details';

export interface DisciplineSemesterRecord extends RecordBookRecord {
  controlForm: ControlForm;
  subject: SubjectDetails;
  signedTeacher: StringNumberPair;
  passedAtSemester: number;
}
