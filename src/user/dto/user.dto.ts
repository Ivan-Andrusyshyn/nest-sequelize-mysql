import { Exclude, Expose } from 'class-transformer';
import { UserRole } from '../user-role.enum';
// import { TaskDto } from '../../tasks/dto/task.dto';

@Exclude()
export class UserDto {
  @Expose()
  id: number;
  @Expose()
  email: string;

  @Expose()
  username: string;

  password: string;

  @Expose()
  role: UserRole;

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
}
