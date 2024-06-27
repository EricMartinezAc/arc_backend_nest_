import { Test, TestingModule } from '@nestjs/testing';
import { PmController } from './pm.controller';
import { PmService } from './pm.service';

describe('PmController', () => {
  let controller: PmController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PmController],
      providers: [PmService],
    }).compile();

    controller = module.get<PmController>(PmController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
