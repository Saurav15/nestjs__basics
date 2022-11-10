import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";

import { Request, response, Response } from "express";


@Catch(HttpException)
export class BookCustomExceptionFilter implements ExceptionFilter{

    // host: Abstraction layer Provided by nest so that we can use various handler methods eg req, res, next.
    catch(exception: HttpException, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const req = context.getRequest<Request>();
        const res = context.getResponse<Response>();
        const status = exception.getStatus();

        // sending custom exception using these various parameters
        res.status(200).json({
            statusCode: status,
            timeStamp: new Date().toISOString(),
            url: req.url
        })
    }

}