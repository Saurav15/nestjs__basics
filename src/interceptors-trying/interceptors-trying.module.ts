import { Module } from '@nestjs/common';
import { InterceptorsTryingController } from './interceptors-trying.controller';

@Module({
  controllers: [InterceptorsTryingController]
})
export class InterceptorsTryingModule {}
