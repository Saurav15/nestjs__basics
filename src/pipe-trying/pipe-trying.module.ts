import { Module } from '@nestjs/common';
import { PipeTryingController } from './pipe-trying.controller';

@Module({
  controllers: [PipeTryingController]
})
export class PipeTryingModule {}
