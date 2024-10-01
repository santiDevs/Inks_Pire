import { PartialType } from '@nestjs/mapped-types';
import { CreateHiringHistoryDto } from './create-hiring-history.dto';

export class UpdateHiringHistoryDto extends PartialType(CreateHiringHistoryDto) {}
