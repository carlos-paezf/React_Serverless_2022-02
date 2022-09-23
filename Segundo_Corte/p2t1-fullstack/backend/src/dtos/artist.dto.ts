import { IsNotEmpty, IsOptional } from "class-validator";
import { BaseDTO } from "../config";
import { TrackEntity } from "../models";


export class ArtistDTO extends BaseDTO {
    @IsNotEmpty()
    artistName!: string

    @IsNotEmpty()
    artistNickname!: string

    @IsNotEmpty()
    artistNationality!: string

    @IsOptional()
    tracks!: TrackEntity[]
}