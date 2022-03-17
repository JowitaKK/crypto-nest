import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { ConfingService } from '@nestjs/config';
import { Request } from 'express';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserResponse } from "src/users/dto/response/userResponse.dot";
import { UsersService } from '../../users/users.service'
import { TokenPayload } from 

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfingService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          return request?.cookies?.Authentication;
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }

  async validate(payload: TokenPayload): Promise<UserResponse> {
    return this.usersService.getUserById(payload.userId);
  }
}