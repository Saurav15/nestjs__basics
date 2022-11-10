import { Controller, Get, UseGuards } from '@nestjs/common';
import { BookGuard } from './bookGuard';

@Controller('guards-trying')
export class GuardsTryingController {

    @Get()
    @UseGuards(BookGuard)
    findAll(){
        return "This message is Guarded by Gurd."
    }
}
