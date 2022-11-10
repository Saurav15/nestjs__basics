import { Test, TestingModule } from '@nestjs/testing';
import { InterceptorsTryingController } from './interceptors-trying.controller';

describe('InterceptorsTryingController', () => {
  let controller: InterceptorsTryingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterceptorsTryingController],
    }).compile();

    controller = module.get<InterceptorsTryingController>(InterceptorsTryingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
