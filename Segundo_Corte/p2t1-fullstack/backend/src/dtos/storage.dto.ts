import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config";
import { TrackEntity } from "../models";


export class StorageDTO extends BaseDTO {
    @IsNotEmpty()
    url!: string

    @IsNotEmpty()
    filename!: string

    @IsNotEmpty()
    track!: TrackEntity
}