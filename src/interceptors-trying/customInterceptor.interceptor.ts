import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { map, Observable } from "rxjs";
import { Request, Response } from "express";

export class CustomInterceptor implements NestInterceptor{

    /* 
        Here context is the execution context that has methods like req res
        We can manipulate the req by extracting it from context.

        Now the thing is ... if we need to manipulate the response we need to access it in return through pipe.
        Data returned from body : 
        return {
            bodyReturn: body,
            anotherData: "Helloanother"
        }

        Now everytime we need to add someting to the response from the body we can do this:
        return next.handle().
        pipe(
            map((data) => {
                data = {
                    fromInterceptor: "HelloFromInterceptor",
                    data
                }
                return data
            })
        )        
        
        o/p: 
        {
            "data": {
                "bodyReturn": {
                    "Hello": "From me",
                    "hello1": "From me1",
                    "hello2": "From me2"
                },
                "anotherData": "Helloanother"
            },
            "dataInterceptor": "Hello from Interceptor:)"
        }
    */

    intercept(context: ExecutionContext, next: CallHandler): Observable<any>{
        console.log("This is interceptor.")
        const ctx = context.switchToHttp();
        const req = ctx.getRequest<Request>();
        const res = ctx.getResponse<Response>();


        return next.handle().
        pipe(
            map((data) => {
                console.log(data);
                data = {
                    data,
                    dataInterceptor: "Hello from Interceptor:)"
                }
                return data
            })
        )
    };
    
}