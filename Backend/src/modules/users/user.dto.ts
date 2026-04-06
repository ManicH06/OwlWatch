import { createZodDto } from 'nestjs-zod';
import z from 'zod';

const UserSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  website: z.url().nullable(),
  role: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export class UserDto extends createZodDto(UserSchema) {}
export class UserListDto extends createZodDto(z.array(UserSchema)) {}
