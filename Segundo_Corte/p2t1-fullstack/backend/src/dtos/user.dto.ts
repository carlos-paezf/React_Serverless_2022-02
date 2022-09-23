import { IsEmail, IsNotEmpty } from "class-validator";
import { BaseDTO } from "../config";
import { RoleEnum } from "../enums/role.enum";


export class UserDTO extends BaseDTO {
    @IsNotEmpty()
    name!: string

    @IsNotEmpty()
    username!: string

    @IsNotEmpty()
    birthDate!: Date

    @IsNotEmpty()
    @IsEmail()
    email!: string

    @IsNotEmpty()
    password!: string

    @IsNotEmpty()
    role!: RoleEnum
}