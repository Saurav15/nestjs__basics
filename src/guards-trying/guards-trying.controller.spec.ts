import { Test, TestingModule } from '@nestjs/testing';
import { GuardsTryingController } from './guards-trying.controller';

describe('GuardsTryingController', () => {
  let controller: GuardsTryingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuardsTryingController],
    }).compile();

    controller = module.get<GuardsTryingController>(GuardsTryingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
