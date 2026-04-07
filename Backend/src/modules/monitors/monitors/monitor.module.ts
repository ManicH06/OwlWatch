import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Monitor } from './monitor.entity';
import { MonitorService } from './monitor.service';
import { MonitorController } from './monitor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Monitor])],
  providers: [MonitorService],
  controllers: [MonitorController],
})
export class MonitorModule {}
