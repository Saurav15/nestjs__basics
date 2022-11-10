import { Test, TestingModule } from '@nestjs/testing';
import { ExceptionsTryingController } from './exceptions-trying.controller';

describe('ExceptionsTryingController', () => {
  let controller: ExceptionsTryingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExceptionsTryingController],
    }).compile();

    controller = module.get<ExceptionsTryingController>(ExceptionsTryingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
