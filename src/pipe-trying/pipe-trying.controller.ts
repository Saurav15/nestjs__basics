import { Body, Controller, Get, Param, ParseIntPipe, Post, ValidationPipe } from '@nestjs/common';
import { User } from './dto/user.dto';
import { userValidation } from './pipes/userValidation.pipe';

@Controller('pipe-trying')
export class PipeTryingController {

    @Get('users/:id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        console.log(id , typeof(id));
        return "This is the user data";
    }

    @Post('users')
    updateUsers(@Body(new ValidationPipe) body: User){
        return {
            status: "Added to DB!",
            body: body
        }
    }
}
