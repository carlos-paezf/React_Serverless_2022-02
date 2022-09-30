import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../config";
import { ArtistEntity } from './artist.entity';
import { FileEntity } from "./file.entity";


@Entity({ name: `tracks` })
export class TrackEntity extends BaseEntity {
    @Column()
    name!: string

    @Column()
    album!: string

    @Column()
    isCover!: boolean

    @Column()
    duration!: number

    @OneToOne(() => FileEntity)
    mediaId!: FileEntity

    @ManyToMany(() => ArtistEntity, (artist) => artist.tracks)
    @JoinTable({
        name: `track_artist`,
        joinColumn: {
            name: `track_id`
        },
        inverseJoinColumn: {
            name: `artist_id`
        }
    })
    artists!: ArtistEntity[]
}