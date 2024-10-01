import { Test, TestingModule } from '@nestjs/testing';
import { HiringHistoryController } from './hiring-history.controller';
import { HiringHistoryService } from './hiring-history.service';

describe('HiringHistoryController', () => {
  let controller: HiringHistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiringHistoryController],
      providers: [HiringHistoryService],
    }).compile();

    controller = module.get<HiringHistoryController>(HiringHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
