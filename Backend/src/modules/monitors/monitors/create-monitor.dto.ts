import { createZodDto } from 'nestjs-zod';
import z from 'zod';

const CreateMonitorSchema = z.object({
  label: z.string().max(50),
  url: z.url('Addresse invalide'),
  headers: z.record(z.string(), z.string()).optional(),
});

export class CreateMonitorDto extends createZodDto(CreateMonitorSchema) {}
