import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArtistProfile } from "../artist-profile/entities/artist-profile.entity";
import { EmployerProfile } from "../employer-profile/entities/employer-profile.entity";
import { User } from "./entities/user.entity";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([User, ArtistProfile, EmployerProfile])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
