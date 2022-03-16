import { AuthGuard } from '@nestjs/passport';
//yarn add  @nestjs/passport passport passport-local

export class JwtAuthGuard extends AuthGuard('jwt') {}
