import {Position} from '../enums/position.enum';
import {AcademicDegree} from '../enums/academic-degree.enum';
import {AcademicStatus} from '../enums/academic-status.enum';
import {PersonInfoCard} from './person-info-card';

export interface TeacherInfoCard extends PersonInfoCard {
  position: Position | null;
  academicDegree: AcademicDegree | null;
  academicStatus: AcademicStatus | null;
  hiringDate: Date | null;
  dismissed: boolean | null;
  dismissalDate: Date | null;
}
