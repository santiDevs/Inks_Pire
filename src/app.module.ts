import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArtistProfileModule } from "./modules/artist-profile/artist-profile.module";
import { UserModule } from "./modules/user/user.module";
import { EmployerProfileModule } from './modules/employer-profile/employer-profile.module';
import { HiringHistoryModule } from './modules/hiring-history/hiring-history.module';
/**
 *
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "inkspire",
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    ArtistProfileModule,
    EmployerProfileModule,
    HiringHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
