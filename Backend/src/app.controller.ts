import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from './modules/auth/auth/local.auth.guard';
import { AuthService } from './modules/auth/auth/auth.service';
import { UserDto } from './modules/users/user.dto';
import { JwtAuthGuard } from './modules/auth/auth/jwt.auth.guard';

interface RequestWithUser extends Request {
  user: UserDto;
}

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  login(@Request() req: RequestWithUser) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getDashboard(@Request() req: RequestWithUser) {
    console.log('You can access this, G! You must be connected!');
    return req.user;
  }
}
