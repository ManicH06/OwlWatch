import { CreateMonitorDto } from './create-monitor.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Monitor } from './monitor.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MonitorService {
  constructor(
    @InjectRepository(Monitor)
    private readonly monitorRepository: Repository<Monitor>,
  ) {}

  async findAll(userId: string): Promise<Monitor[]> {
    return this.monitorRepository.find({
      where: {
        user: { id: userId },
      },
      order: {
        createdAt: 'DESC',
      },
    });
  }

  async create(
    createMonitorDto: CreateMonitorDto,
    userId: string,
  ): Promise<Monitor> {
    const { url, label, headers } = createMonitorDto;
    const existingMonitor = await this.monitorRepository.findOne({
      where: {
        url: url,
        user: { id: userId },
      },
    });
    if (existingMonitor) {
      throw new ConflictException('Cet addresse a été déjà ajoutée');
    }
    const newMonitor = this.monitorRepository.create({
      url,
      label,
      headers: headers ?? {},
      user: { id: userId },
    });

    return await this.monitorRepository.save(newMonitor);
  }
}
