import { ArtistProfile } from "../entities/artist-profile.entity";

export type CreateArtistProfileDto = Omit<
  ArtistProfile,
  "createdDay" | "createdDay"
>;
