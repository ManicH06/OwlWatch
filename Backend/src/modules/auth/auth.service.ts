import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { omit } from '../../utils';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from '../users/user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<UserDto | null> {
    const user = await this.usersService.findOne(email);
    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);
      console.log(isMatch);
      if (isMatch) {
        const result = omit(user, ['password']);
        return result;
      }
    }
    return null;
  }

  login(user: UserDto) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
