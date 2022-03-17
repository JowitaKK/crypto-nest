import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { UserResponse } from '../users/dto/response/userResponse.dot';
import { AuthService } from './auth.service';
import { CurrentUser } from './currentUser.decorator';
import { JwtLocalAuthGuard } from './guards/localAuth';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtLocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: UserResponse,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    await this.authService.login(user, response);
    response.send(user);
  }
}