import { IsEmail, IsString, Min } from "class-validator";

export class User{
    @IsString()
    firstname: string;

    @IsString()
    lastname: string;

    @IsEmail()
    email: string;
}