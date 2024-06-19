import { Test, TestingModule } from '@nestjs/testing';
import { ResoursesController } from './resourses.controller';
import { ResoursesService } from './resourses.service';

describe('ResoursesController', () => {
  let controller: ResoursesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResoursesController],
      providers: [ResoursesService],
    }).compile();

    controller = module.get<ResoursesController>(ResoursesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
