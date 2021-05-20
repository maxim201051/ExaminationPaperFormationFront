import {SubjectDetails} from './subject-details';
import {StringNumberPair} from './string-number-pair';
import {ControlForm} from '../enums/control-form.enum';
import {StringNumberPairImpl} from './string-number-pair-impl';

export class SubjectDetailsImpl implements SubjectDetails{
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

  constructor() {
    this.id = null;
    this.totalHours = null;
    this.lecturesHours = null;
    this.practiceHours = null;
    this.labWorkHours = null;
    this.selfAndControlWorkHours = null;
    this.responsibleTeacher = new StringNumberPairImpl();
    this.hasCourseWork = false;
    this.subject = new StringNumberPairImpl();
    this.controlForm = null;
    this.creditNumber = null;
  }
}
