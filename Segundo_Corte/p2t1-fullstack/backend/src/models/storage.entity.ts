import { Column, Entity, OneToOne } from "typeorm";
import { BaseEntity } from "../config";
import { TrackEntity } from './track.entity';


@Entity({ name: `storage` })
export class StorageEntity extends BaseEntity {
    @Column()
    url!: string

    @Column()
    filename!: string

    @OneToOne(() => TrackEntity, (track) => track.mediaId)
    track!: TrackEntity
}