import { red } from "colors";
import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config";
import { TrackDTO } from "../dtos";
import { TrackEntity } from "../models";


export class TrackService extends BaseService<TrackEntity> {
    constructor() {
        super(TrackEntity)
    }

    public async findTracks(from: number, limit: number, order: string): Promise<[ TrackEntity[], number ]> {
        return (await this.execRepository).findAndCount({
            skip: from,
            take: limit,
            order: { name: (order === 'ASC') ? 'ASC' : 'DESC' },
            relations: { artists: true }
        })
    }

    public async findOneTrackById(id: string): Promise<TrackEntity | null> {
        return (await this.execRepository).findOne({
            where: { id },
            relations: { artists: true }
        })
    }

    public async findTracksByName(name: string): Promise<[ TrackEntity[], number ]> {
        return (await this.execRepository)
            .createQueryBuilder('track')
            .where(`track.name like :name`, { name: `%${ name }` })
            .getManyAndCount()
    }

    public async saveTrack(body: TrackDTO): Promise<TrackEntity> {
        return (await this.execRepository).save(body)
    }

    public async updateTrackById(id: string, infoUpdate: TrackDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, { ...infoUpdate, updatedAt: new Date() })
    }

    public async deleteTrackById(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete(id)
    }
}