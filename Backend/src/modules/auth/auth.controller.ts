import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './local.auth.guard';
import { AuthService } from './auth.service';
import { UserDto } from '../users/user.dto';

interface RequestWithUser {
  user: UserDto;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }
}
