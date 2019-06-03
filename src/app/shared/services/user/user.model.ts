import { Role } from './role/role.model';

export interface UserModel {
  id: number;
  name: string;
  email: string;
  roles?: Role[];
}
