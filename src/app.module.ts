import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeeModule } from './coffee/coffee.module';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from './config/config.module';
import { DynamicDbModuleModule } from './dynamic_db_module/dynamic_db_module.module';
import { PipeTryingModule } from './pipe-trying/pipe-trying.module';
import { ExceptionsTryingModule } from './exceptions-trying/exceptions-trying.module';
import { GuardsTryingModule } from './guards-trying/guards-trying.module';
import { InterceptorsTryingModule } from './interceptors-trying/interceptors-trying.module';
@Module({
  // imports: [CoffeeModule, CoffeeRatingModule, ConfigModule, DynamicDbModuleModule.register({host: "adsd",type: "postgres",port:5432}), PipeTryingModule],
  imports: [PipeTryingModule, ExceptionsTryingModule, GuardsTryingModule, InterceptorsTryingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
