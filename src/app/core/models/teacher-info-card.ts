import {Position} from '../enums/position.enum';
import {AcademicDegree} from '../enums/academic-degree.enum';
import {AcademicStatus} from '../enums/academic-status.enum';

export interface TeacherInfoCard {
  position: Position;
  academicDegree: AcademicDegree;
  academicStatus: AcademicStatus;
  hiringDate: Date;
  dismissed: boolean;
  dismissalDate: Date;
}
