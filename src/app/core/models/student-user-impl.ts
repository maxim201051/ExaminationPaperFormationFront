import {StudentInfoCard} from './student-info-card';
import {User} from './user';
import {UserImpl} from './user-impl';
import {StudentUser} from './student-user';
import {StudentInfoCardImpl} from './student-info-card-impl';

export class StudentUserImpl implements StudentUser{
  student: StudentInfoCard;
  user: User;

  constructor() {
    this.student = new StudentInfoCardImpl();
    this.user = new UserImpl();
  }
}
