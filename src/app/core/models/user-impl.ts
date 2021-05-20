import {User} from './user';
import {Role} from '../enums/role.enum';

export class UserImpl implements User {
  id: number | null;
  username: string | null;
  password: string | null;
  profilePictureFileName: string | null;
  authority: Role | null;
  enabled: boolean | null;

  constructor() {
    this.id = null;
    this.username = null;
    this.password = null;
    this.profilePictureFileName = null;
    this.authority = null;
    this.enabled = null;
  }
}
