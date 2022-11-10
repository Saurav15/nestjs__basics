import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { CustomInterceptor } from './customInterceptor.interceptor';

// Interceptors are used to manipulate either incoming req or outgoing res.

@Controller('interceptors-trying')
export class InterceptorsTryingController {

    @Post()
    @UseInterceptors(new CustomInterceptor())
    postSomeStuff(@Body() body: any,){
        return {
            bodyReturn: body,
            anotherData: "Helloanother"
        }
    }
}
