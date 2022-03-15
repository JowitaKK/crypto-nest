import {IsEmail, IsNotEmpty, IsString} from 'class-validator';

export class CreateUserRequest {
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()

    password: string;
}

//to validation and decoratora install yarn add class-validator class-transformer