import { BadRequestException, Controller, ForbiddenException, Get, HttpException, HttpStatus, UseFilters } from '@nestjs/common';
import { BookCustomExceptionFilter } from './bookCuostomExceptionFilter';

/*
While the base (built-in) exception filter can automatically handle many cases for you, you may want full control over the exceptions layer. For example, you may want to add logging or use a different JSON schema based on some dynamic factors. Exception filters are designed for exactly this purpose. They let you control the exact flow of control and the content of the response sent back to the client.
*/


@Controller('exceptions-trying')
export class ExceptionsTryingController {

    @Get('/books')
    @UseFilters(new BookCustomExceptionFilter)
    findAll(){
        // simple exception throwing
        throw new BadRequestException()

        // Default created classes for various exception.
        // throw new ForbiddenException("ERROR HAI YE!!")

        //
        // throw new HttpException({
        //     error: "This is an error",
        //     statusCode: HttpStatus.BAD_REQUEST
        // },400);
        return "Yeah :!!"
    }

}
