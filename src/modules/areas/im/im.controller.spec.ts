import { Test, TestingModule } from '@nestjs/testing';
import { ImController } from './im.controller';
import { ImService } from './im.service';

describe('ImController', () => {
  let controller: ImController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImController],
      providers: [ImService],
    }).compile();

    controller = module.get<ImController>(ImController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
