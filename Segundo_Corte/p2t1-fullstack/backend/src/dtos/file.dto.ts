import { IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config";
import { TrackEntity } from "../models";


export class FileDTO extends BaseDTO {
    @IsNotEmpty()
    mimeType!: string

    @IsNotEmpty()
    base64!: string

    @IsNotEmpty()
    filename!: string

    @IsNotEmpty()
    trackId!: TrackEntity
}