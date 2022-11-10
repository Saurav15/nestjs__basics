import { Module } from '@nestjs/common';
import { GuardsTryingController } from './guards-trying.controller';

@Module({
  controllers: [GuardsTryingController]
})
export class GuardsTryingModule {}
