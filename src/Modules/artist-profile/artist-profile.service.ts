import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateArtistProfileDto } from "./dto/create-artist-profile.dto";
import { UpdateArtistProfileDto } from "./dto/update-artist-profile.dto";
import { ArtistProfile } from "./entities/artist-profile.entity";

/**
 *
 */
@Injectable()
export class ArtistProfileService {
  constructor(
    @InjectRepository(ArtistProfile)
    private artistProfileRepository: Repository<ArtistProfile>,
  ) {}

  /**
   *
   * @param createArtistProfileDto
   */
  async create(createArtistProfileDto: CreateArtistProfileDto) {
    const newArtistProfile = await this.artistProfileRepository.save(
      createArtistProfileDto,
    );

    return newArtistProfile;
  }

  /**
   *
   */
  findAll() {
    return this.artistProfileRepository.find();
  }

  /**
   *
   * @param id
   */
  findOne(id: number) {
    return this.artistProfileRepository.findOne({
      where: { id: id },
      relations: ["user"],
    });
  }

  /**
   *
   * @param id
   * @param updateArtistProfileDto
   */
  update(id: number, updateArtistProfileDto: UpdateArtistProfileDto) {
    return this.artistProfileRepository.update(id, updateArtistProfileDto);
  }

  /**
   *
   * @param id
   */
  async remove(id: number) {
    const response = await this.artistProfileRepository.delete(id);
    return response.affected > 0;
  }
}
