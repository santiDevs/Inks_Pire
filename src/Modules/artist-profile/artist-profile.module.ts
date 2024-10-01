import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { ArtistProfileController } from "./artist-profile.controller";
import { ArtistProfileService } from "./artist-profile.service";
import { ArtistProfile } from "./entities/artist-profile.entity";

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([ArtistProfile, User])],
  controllers: [ArtistProfileController],
  providers: [ArtistProfileService],
})
export class ArtistProfileModule {}
