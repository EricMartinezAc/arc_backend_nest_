import { Test, TestingModule } from '@nestjs/testing';
import { SmService } from './sm.service';

describe('SmService', () => {
  let service: SmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SmService],
    }).compile();

    service = module.get<SmService>(SmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
