import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config";
import { ArtistEntity, StorageEntity } from "../models";


export class TrackDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    album!: string

    @IsNotEmpty()
    isCover!: boolean

    @IsNotEmpty()
    durationStart!: number

    @IsNotEmpty()
    durationEnd!: number

    @IsNotEmpty()
    mediaId!: StorageEntity

    @IsNotEmpty()
    artists!: ArtistEntity[]
}