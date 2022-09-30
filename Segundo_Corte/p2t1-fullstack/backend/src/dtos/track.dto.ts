import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config";
import { ArtistEntity } from "../models";


export class TrackDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    album!: string

    @IsNotEmpty()
    isCover!: boolean

    @IsNotEmpty()
    duration!: number

    @IsNotEmpty()
    artists!: ArtistEntity[]
}