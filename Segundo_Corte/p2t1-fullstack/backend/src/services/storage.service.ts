import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config";
import { StorageDTO } from "../dtos";
import { StorageEntity } from "../models";


export class StorageService extends BaseService<StorageEntity> {
    constructor() {
        super(StorageEntity)
    }

    public async findStorages(from: number, limit: number, order: string): Promise<[ StorageEntity[], number ]> {
        return (await this.execRepository).findAndCount({
            skip: from,
            take: limit,
            order: { filename: (order === 'ASC') ? 'ASC' : 'DESC' }
        })
    }

    public async findOneStorageById(id: string): Promise<StorageEntity | null> {
        return (await this.execRepository).findOne({
            where: { id },
            relations: { track: true }
        })
    }

    public async createStorage(body: StorageDTO): Promise<StorageEntity> {
        return (await this.execRepository).save(body)
    }

    public async updateStorageById(id: string, infoUpdate: StorageDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, { ...infoUpdate, updatedAt: new Date() })
    }

    public async softDeleteStorageById(id: string): Promise<DeleteResult> {
        return (await this.execRepository).softDelete(id)
    }
}