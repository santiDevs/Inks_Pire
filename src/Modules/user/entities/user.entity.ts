import { CommonEntity } from "src/Common/common.entity";
import { ArtistProfile } from "src/modules/artist-profile/entities/artist-profile.entity";
import { EmployerProfile } from "src/modules/employer-profile/entities/employer-profile.entity";
import { Column, Entity, OneToOne } from "typeorm";
import { UserRole } from "../user-rule.enum";

/**
 *
 */
@Entity()
export class User extends CommonEntity {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.ARTIST,
  })
  userRole: UserRole;

  @OneToOne(() => ArtistProfile, (artistProfile) => artistProfile.user)
  artistProfile: ArtistProfile;

  @OneToOne(() => EmployerProfile, (employerProfile) => employerProfile.user)
  employer: EmployerProfile;

  @Column()
  bio: string;
}
