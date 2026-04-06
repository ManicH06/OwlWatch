import { createZodDto } from 'nestjs-zod';
import z from 'zod';

const CreateUserSchema = z
  .object({
    firstName: z.string().min(1, 'Le nom est requis').max(50),
    lastName: z.string().min(1, 'Le prénom est requis').max(50),
    email: z.email('Addresse email invalide!'),
    website: z.url('Addresse web invalide').optional().nullable(),
    password: z
      .string()
      .min(8, 'Minimum 8 caractères')
      .regex(/[A-Z]/, 'Majuscule requise')
      .regex(/[a-z]/, 'Minuscule requise')
      .regex(/[#?!@$ %^&*-]/, 'Caractère spécial requis')
      .regex(/[0-9]/, 'Nombre requis'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Le mot de passe doit être le même',
    path: ['confirmPassword'],
  })
  .strict();

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
