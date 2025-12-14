
import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  async register(email: string, password: string) {
    const hash = await bcrypt.hash(password, 10);
    return { email, password: hash };
  }

  async login(email: string, password: string) {
    if (!email || !password) throw new UnauthorizedException();
    return { access_token: 'JWT_TOKEN_SAMPLE' };
  }
}
