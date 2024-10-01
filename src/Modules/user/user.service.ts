import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./entities/user.entity";

/**
 *
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  /**
   *
   * @param createUserDto
   */
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.userRepository.save(createUserDto);
    return newUser.id;
  }

  /**
   *
   */
  findAll() {
    return this.userRepository.find();
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  /**
   *
   * @param id
   * @param updateUserDto
   */
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto);
  }

  /**
   *
   * @param id
   */
  async remove(id: number) {
    const response = await this.userRepository.delete(id);
    return response.affected > 0;
  }
}
