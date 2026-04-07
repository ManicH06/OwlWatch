import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { JwtAuthGuard } from '../../auth/jwt.auth.guard';
import { CreateMonitorDto } from './create-monitor.dto';
import { Request as ExpressRequest } from 'express';

interface AuthenticateUser extends ExpressRequest {
  user: {
    userId: string;
    email: string;
  };
}

@Controller('monitors')
@UseGuards(JwtAuthGuard)
export class MonitorController {
  constructor(private readonly monitorService: MonitorService) {}

  @Get()
  async findAll(@Request() req: AuthenticateUser) {
    return await this.monitorService.findAll(req.user.userId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createMonitorDto: CreateMonitorDto,
    @Request() req: AuthenticateUser,
  ) {
    const userId = req.user.userId;
    return await this.monitorService.create(createMonitorDto, userId);
  }
}
