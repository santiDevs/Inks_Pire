import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { ArtistProfileService } from "./artist-profile.service";
import { CreateArtistProfileDto } from "./dto/create-artist-profile.dto";
import { UpdateArtistProfileDto } from "./dto/update-artist-profile.dto";

/**
 *
 */
@Controller("artist-profile")
export class ArtistProfileController {
  constructor(private readonly artistProfileService: ArtistProfileService) {}

  /**
   *
   * @param createArtistProfileDto
   */
  @Post("CreateArtistProfile")
  create(@Body() createArtistProfileDto: CreateArtistProfileDto) {
    return this.artistProfileService.create(createArtistProfileDto);
  }

  /**
   *
   */
  @Get("FindAllArtistProfiles")
  findAll() {
    return this.artistProfileService.findAll();
  }

  /**
   *
   * @param id
   */
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.artistProfileService.findOne(+id);
  }

  /**
   *
   * @param id
   * @param updateArtistProfileDto
   */
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateArtistProfileDto: UpdateArtistProfileDto,
  ) {
    return this.artistProfileService.update(+id, updateArtistProfileDto);
  }

  /**
   *
   * @param id
   */
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.artistProfileService.remove(+id);
  }
}
