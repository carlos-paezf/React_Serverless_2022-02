import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config";
import { FileDTO } from "../dtos";
import { FileEntity } from "../models";


export class FileService extends BaseService<FileEntity> {
    constructor() {
        super(FileEntity)
    }

    public async findFiles(from: number, limit: number, order: string): Promise<[ FileEntity[], number ]> {
        return (await this.execRepository).findAndCount({
            skip: from,
            take: limit,
            order: { filename: (order === 'ASC') ? 'ASC' : 'DESC' }
        })
    }

    public async findOneFileById(id: string): Promise<FileEntity | null> {
        return (await this.execRepository).findOne({
            where: { id },
            relations: { trackId: true }
        })
    }

    public async createFile(body: FileDTO): Promise<FileEntity> {
        return (await this.execRepository).save(body)
    }

    public async updateFileById(id: string, infoUpdate: FileDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, { ...infoUpdate, updatedAt: new Date() })
    }

    public async deleteFileById(id: string): Promise<DeleteResult> {
        return (await this.execRepository).delete(id)
    }
}