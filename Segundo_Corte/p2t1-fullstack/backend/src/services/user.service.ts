import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../config";
import { UserDTO } from "../dtos";
import { UserEntity } from "../models";


export class UserService extends BaseService<UserEntity> {
    constructor() {
        super(UserEntity)
    }

    public async findUsers(from: number, limit: number, order: string): Promise<[ UserEntity[], number ]> {
        return (await this.execRepository).findAndCount({
            skip: from,
            take: limit,
            order: { name: (order === 'ASC') ? 'ASC' : 'DESC' }
        })
    }

    public async findOneUserById(id: string): Promise<UserEntity | null> {
        return (await this.execRepository).findOne({
            where: { id }
        })
    }

    public async findUserByUsername(username: string): Promise<UserEntity | null> {
        return (await this.execRepository).findOne({
            where: { username },
            select: { id: true, password: true }
        })
    }

    public async createUser(body: UserDTO): Promise<UserEntity> {
        return (await this.execRepository).save(body)
    }

    public async updateUserById(id: string, infoUpdate: UserDTO): Promise<UpdateResult> {
        return (await this.execRepository).update(id, { ...infoUpdate, updatedAt: new Date() })
    }

    public async softDeleteUserById(id: string): Promise<DeleteResult> {
        return (await this.execRepository).softDelete(id)
    }
}