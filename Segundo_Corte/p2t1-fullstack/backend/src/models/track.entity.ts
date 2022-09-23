import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from "typeorm";
import { BaseEntity } from "../config";
import { ArtistEntity } from './artist.entity';
import { StorageEntity } from "./storage.entity";


@Entity({ name: `tracks` })
export class TrackEntity extends BaseEntity {
    @Column()
    name!: string

    @Column()
    album!: string

    @Column()
    isCover!: boolean

    @Column()
    durationStart!: number

    @Column()
    durationEnd!: number

    @OneToOne(() => StorageEntity)
    @JoinColumn({ name: `storage_id` })
    mediaId!: StorageEntity

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