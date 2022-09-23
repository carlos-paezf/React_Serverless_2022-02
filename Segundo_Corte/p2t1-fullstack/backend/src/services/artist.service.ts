import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config";
import { ArtistDTO } from "../dtos";
import { ArtistEntity } from "../models";


export class ArtistService extends BaseService<ArtistEntity> {
    constructor() {
        super(ArtistEntity)
    }

    public async findArtist(from: number, limit: number, order: string): Promise<[ ArtistEntity[], number ]> {
        return (await this.execRepository).findAndCount({
            skip: from,
            take: limit,
            order: { artistNickname: (order === 'ASC') ? 'ASC' : 'DESC' }
        })
    }

    public async findOneArtistById(id: string): Promise<ArtistEntity | null> {
        return (await this.execRepository).findOne({
            where: { id },
            relations: { tracks: true }
        })
    }

    public async findArtistByName(name: string): Promise<[ ArtistEntity[], number ]> {
        return (await this.execRepository)
            .createQueryBuilder('artist')
            .where(`artist.artistName like :name`, { name: `%${ name }` })
            .getManyAndCount()
    }

    public async createArtist(body: ArtistDTO): Promise<ArtistEntity> {
        return (await this.execRepository).save(body)
    }

    public async updateArtistById(id: string, infoUpdate: ArtistDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, { ...infoUpdate, updatedAt: new Date() })
    }

    public async softDeleteArtistById(id: string): Promise<DeleteResult> {
        return (await this.execRepository).softDelete(id)
    }
}