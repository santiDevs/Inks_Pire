import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HiringHistoryService } from './hiring-history.service';
import { CreateHiringHistoryDto } from './dto/create-hiring-history.dto';
import { UpdateHiringHistoryDto } from './dto/update-hiring-history.dto';

@Controller('hiring-history')
export class HiringHistoryController {
  constructor(private readonly hiringHistoryService: HiringHistoryService) {}

  @Post()
  create(@Body() createHiringHistoryDto: CreateHiringHistoryDto) {
    return this.hiringHistoryService.create(createHiringHistoryDto);
  }

  @Get()
  findAll() {
    return this.hiringHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hiringHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHiringHistoryDto: UpdateHiringHistoryDto) {
    return this.hiringHistoryService.update(+id, updateHiringHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hiringHistoryService.remove(+id);
  }
}
