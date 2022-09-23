import { Column, Entity } from "typeorm";
import { BaseEntity } from "../config";
import { RoleEnum } from "../enums/role.enum";


@Entity({ name: `user` })
export class UserEntity extends BaseEntity {
    @Column()
    name!: string

    @Column()
    username!: string

    @Column()
    birthDate!: Date

    @Column()
    email!: string

    @Column()
    password!: string

    @Column({ type: 'enum', enum: RoleEnum, nullable: false })
    role!: RoleEnum
}