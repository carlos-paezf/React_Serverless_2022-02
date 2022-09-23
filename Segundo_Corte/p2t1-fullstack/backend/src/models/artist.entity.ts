import { Column, Entity, ManyToMany } from "typeorm"
import { BaseEntity } from "../config"
import { TrackEntity } from "./track.entity"


@Entity({ name: `artist` })
export class ArtistEntity extends BaseEntity {
    @Column()
    artistName!: string

    @Column()
    artistNickname!: string

    @Column()
    artistNationality!: string

    @ManyToMany(() => TrackEntity, (track) => track.artists)
    tracks!: TrackEntity[]
}