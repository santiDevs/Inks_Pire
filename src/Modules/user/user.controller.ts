import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

/**
 *
 */
@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  /**
   *
   * @param createUserDto
   */
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  /**
   *
   */
  @Get("FindUsers")
  findAll() {
    return this.userService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.userService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateUserDto
   */
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  /**
   *
   * @param id
   */
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.userService.remove(+id);
  }
}
