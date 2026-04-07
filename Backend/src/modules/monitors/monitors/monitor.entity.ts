import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/user.entity';

export enum MonitorStatus {
  UP = 'up',
  DOWN = 'down',
  PENDING = 'pending',
}

@Entity('monitors')
export class Monitor {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 50 })
  label!: string;

  @Column()
  url!: string;

  @Column({ default: 60 }) // 60 secondes par défaut
  interval!: number;

  @Column({ type: 'enum', enum: MonitorStatus, default: MonitorStatus.PENDING })
  status!: MonitorStatus;

  @Column({ type: 'jsonb', nullable: true })
  headers?: Record<string, string>;

  @CreateDateColumn()
  createdAt!: Date;

  @Column({ nullable: true })
  lastChecked!: Date;

  @ManyToOne(() => User, (user) => user.monitors)
  user!: User;
}
