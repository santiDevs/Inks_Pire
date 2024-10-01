import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateEmployerProfileDto } from "./dto/create-employer-profile.dto";
import { UpdateEmployerProfileDto } from "./dto/update-employer-profile.dto";
import { EmployerProfileService } from "./employer-profile.service";

/**
 *
 */
@Controller("employer-profile")
export class EmployerProfileController {
  constructor(
    private readonly employerProfileService: EmployerProfileService,
  ) {}

  /**
   *
   * @param createEmployerProfileDto
   */
  @Post("CreateEmployerProfile")
  create(@Body() createEmployerProfileDto: CreateEmployerProfileDto) {
    return this.employerProfileService.create(createEmployerProfileDto);
  }

  /**
   *
   */
  @Get("FindAllEmployerProfiles")
  findAll() {
    return this.employerProfileService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.employerProfileService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateEmployerProfileDto
   */
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEmployerProfileDto: UpdateEmployerProfileDto,
  ) {
    return this.employerProfileService.update(+id, updateEmployerProfileDto);
  }

  /**
   *
   * @param id
   */
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.employerProfileService.remove(+id);
  }
}
