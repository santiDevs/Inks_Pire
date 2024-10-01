import { CommonEntity } from "src/Common/common.entity";
import { User } from "src/modules/user/entities/user.entity";
import { Entity, JoinColumn, OneToOne } from "typeorm";

/**
 *
 */
@Entity()
export class ArtistProfile extends CommonEntity {
  @OneToOne(() => User, (user) => user.artistProfile)
  @JoinColumn({ name: "userId" })
  user: User;
}
