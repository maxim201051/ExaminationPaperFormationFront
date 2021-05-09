import {Role} from '../enums/role.enum';

export interface User {
  id: number;
  username: string;
  password: string;
  profilePictureFileName: string;
  authority: Role;
  enabled: boolean;
}
