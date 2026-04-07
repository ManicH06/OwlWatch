import { Controller, Request, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './modules/auth/auth.service';
import { UserDto } from './modules/users/user.dto';
import { JwtAuthGuard } from './modules/auth/jwt.auth.guard';

interface RequestWithUser extends Request {
  user: UserDto;
}

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getWelcome(): string {
    return 'Welcome to the OwlWatch API!';
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getDashboard(@Request() req: RequestWithUser) {
    console.log('You can access this, G! You must be connected!');
    return req.user;
  }
}
