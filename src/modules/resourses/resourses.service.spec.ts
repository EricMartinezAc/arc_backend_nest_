import { Test, TestingModule } from '@nestjs/testing';
import { ResoursesService } from './resourses.service';

describe('ResoursesService', () => {
  let service: ResoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ResoursesService],
    }).compile();

    service = module.get<ResoursesService>(ResoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
