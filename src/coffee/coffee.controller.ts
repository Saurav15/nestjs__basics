import { Controller, Get, Header, Inject, Req } from '@nestjs/common';
import { COFFEE_BRANDS } from './coffee.constants';
import { CoffeeService } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
    constructor(
        private readonly coffeeService: CoffeeService,
        @Inject(COFFEE_BRANDS) stringProvider: string[]
    ){
        console.log(stringProvider)
    }

    @Get()
    findData(){
        return this.coffeeService.findDataFromService()
    }

    @Get('stringProvider')
    sendProviderToken(){
    }

    @Get('headers')
    getHeaders(@Req() request){
        console.log("Hellos")
        console.log(request.rawHeaders[1])
    }   
}
