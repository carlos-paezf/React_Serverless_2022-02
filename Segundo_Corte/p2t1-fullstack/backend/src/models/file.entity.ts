import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../config";
import { TrackEntity } from './track.entity';


@Entity({ name: `files` })
export class FileEntity extends BaseEntity {
    @Column()
    mimeType!: string

    @Column({ type: "text" })
    base64!: string

    @Column()
    filename!: string

    @OneToOne(() => TrackEntity, (track) => track.mediaId)
    @JoinColumn({ name: `track_id` })
    trackId!: TrackEntity
}