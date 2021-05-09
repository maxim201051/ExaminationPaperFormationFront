import {DisciplineSemesterRecord} from './discipline-semester-record';
import {StudentInfoCard} from './student-info-card';

export interface StudentDisciplineRecord {
  student: StudentInfoCard;
  record: DisciplineSemesterRecord;
}
