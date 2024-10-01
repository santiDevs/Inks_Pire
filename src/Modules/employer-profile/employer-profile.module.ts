import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../user/entities/user.entity";
import { EmployerProfileController } from "./employer-profile.controller";
import { EmployerProfileService } from "./employer-profile.service";
import { EmployerProfile } from "./entities/employer-profile.entity";

/**
 *
 */
@Module({
  imports: [TypeOrmModule.forFeature([EmployerProfile, User])],
  controllers: [EmployerProfileController],
  providers: [EmployerProfileService],
})
export class EmployerProfileModule {}
