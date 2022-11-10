import { Module } from '@nestjs/common';
import { CoffeeService } from './coffee.service';
import { CoffeeController } from './coffee.controller';
import { CoffeeMockService } from './coffee.service.mock';
import { COFFEE_BRANDS } from './coffee.constants';




@Module({
  providers: [{
    provide: CoffeeService,
    useClass: CoffeeService
    // useValue: new CoffeeMockService
  },{
    provide: COFFEE_BRANDS,
    useValue: ["buddy brew", "nescafe"]
  }],
  controllers: [CoffeeController],
  exports: [CoffeeService]
})
export class CoffeeModule {}
