import { Module } from '@nestjs/common';
import { HiringHistoryService } from './hiring-history.service';
import { HiringHistoryController } from './hiring-history.controller';

@Module({
  controllers: [HiringHistoryController],
  providers: [HiringHistoryService],
})
export class HiringHistoryModule {}
