import {TeacherInfoCard} from './teacher-info-card';
import {PersonInfoCardImpl} from './person-info-card-impl';
import {Position} from '../enums/position.enum';
import {AcademicDegree} from '../enums/academic-degree.enum';
import {AcademicStatus} from '../enums/academic-status.enum';

export class TeacherInfoCardImpl extends PersonInfoCardImpl implements TeacherInfoCard{
  position: Position | null;
  academicDegree: AcademicDegree | null;
  academicStatus: AcademicStatus | null;
  hiringDate: Date | null;
  dismissed: boolean | null;
  dismissalDate: Date | null;

  constructor() {
    super();
    this.position = null;
    this.academicDegree = null;
    this.academicStatus = null;
    this.hiringDate = null;
    this.dismissed = null;
    this.dismissalDate = null;
  }
}
