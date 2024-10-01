import { Test, TestingModule } from '@nestjs/testing';
import { HiringHistoryService } from './hiring-history.service';

describe('HiringHistoryService', () => {
  let service: HiringHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HiringHistoryService],
    }).compile();

    service = module.get<HiringHistoryService>(HiringHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
