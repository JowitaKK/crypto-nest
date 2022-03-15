import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserRequest } from './dto/request/createUserRequest.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserResponse } from './dto/response/userResponse.dot';
import { UsersService } from './users.service';
// to create this file use: nest g modue users, nest g controller users, nest g service users
@Controller('users')
export class UsersController {
     constructor(private readonly usersService: UsersService) {}

     @Post()
     async createUser(
          @Body() createUserRequest: CreateUserRequest: CreateUserRequest,
     ): Promise<UserResponse> {
          return this.usersService.createUser(createUserRequest);

     }

     @Get()
     @UserGuards(JwtAuthGuard)
     async getUser(@CurrentUser() user: UserResponse): Promise<UserResponse> {
          return user;
     }
}
