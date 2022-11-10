import { Module } from '@nestjs/common';
import { ExceptionsTryingController } from './exceptions-trying.controller';

@Module({
  controllers: [ExceptionsTryingController]
})
export class ExceptionsTryingModule {}
