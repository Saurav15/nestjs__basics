import { Injectable } from '@nestjs/common';
import { CoffeeService } from 'src/coffee/coffee.service';

@Injectable()
export class CoffeeRatingService {
    constructor(
        private readonly coffeeService:CoffeeService
    ){}

    findAll(){
        return {
            data: this.coffeeService.findDataFromService(),
            from: "Coffee Service Rating."
        }
    }
}
