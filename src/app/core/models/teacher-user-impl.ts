import {TeacherUser} from './teacher-user';
import {TeacherInfoCardImpl} from './teacher-info-card-impl';
import {UserImpl} from './user-impl';
import {User} from './user';
import {TeacherInfoCard} from './teacher-info-card';

export class TeacherUserImpl implements TeacherUser{
  teacher: TeacherInfoCard;
  user: User;

  constructor() {
    this.teacher = new TeacherInfoCardImpl();
    this.user = new UserImpl();
  }
}
