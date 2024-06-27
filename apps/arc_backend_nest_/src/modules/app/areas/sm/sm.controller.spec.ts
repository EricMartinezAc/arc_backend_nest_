import { Test, TestingModule } from '@nestjs/testing';
import { SmController } from './sm.controller';
import { SmService } from './sm.service';

describe('SmController', () => {
  let controller: SmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SmController],
      providers: [SmService],
    }).compile();

    controller = module.get<SmController>(SmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
