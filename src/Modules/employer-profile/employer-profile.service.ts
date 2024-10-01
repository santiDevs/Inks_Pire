import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateEmployerProfileDto } from "./dto/create-employer-profile.dto";
import { UpdateEmployerProfileDto } from "./dto/update-employer-profile.dto";
import { EmployerProfile } from "./entities/employer-profile.entity";

/**
 *
 */
@Injectable()
export class EmployerProfileService {
  constructor(
    @InjectRepository(EmployerProfile)
    private employerProfileRepository: Repository<EmployerProfile>,
  ) {}

  /**
   *
   * @param createEmployerProfileDto
   */
  async create(createEmployerProfileDto: CreateEmployerProfileDto) {
    const newEmployerProfile = await this.employerProfileRepository.save(
      createEmployerProfileDto,
    );

    return newEmployerProfile;
  }

  /**
   *
   */
  findAll() {
    return this.employerProfileRepository.find();
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.employerProfileRepository.findOne({
      where: { id: id },
      relations: ["user"],
    });
  }

  /**
   *
   * @param id
   * @param updateEmployerProfileDto
   */
  update(id: number, updateEmployerProfileDto: UpdateEmployerProfileDto) {
    return this.employerProfileRepository.update(id, updateEmployerProfileDto);
  }

  /**
   *
   * @param id
   */
  async remove(id: number) {
    const reponse = await this.employerProfileRepository.delete(id);
    return reponse.affected > 0;
  }
}
