import { Injectable } from '@nestjs/common';
import { CreateHiringHistoryDto } from './dto/create-hiring-history.dto';
import { UpdateHiringHistoryDto } from './dto/update-hiring-history.dto';

@Injectable()
export class HiringHistoryService {
  create(createHiringHistoryDto: CreateHiringHistoryDto) {
    return 'This action adds a new hiringHistory';
  }

  findAll() {
    return `This action returns all hiringHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} hiringHistory`;
  }

  update(id: number, updateHiringHistoryDto: UpdateHiringHistoryDto) {
    return `This action updates a #${id} hiringHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} hiringHistory`;
  }
}
