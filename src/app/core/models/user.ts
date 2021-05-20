import {Role} from '../enums/role.enum';

export interface User {
  id: number | null;
  username: string | null;
  password: string | null;
  profilePictureFileName: string | null;
  authority: Role | null;
  enabled: boolean | null;
}
