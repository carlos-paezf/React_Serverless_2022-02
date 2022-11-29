import { FormEvent } from "react"
import { BaseModelType } from "../../../../../util/types"
import { RoleType } from "../../../roles/util/types"


export interface UserType extends BaseModelType {
    name: string
    lastName: string
    username: string
    email: string
    password: string
    position: string
    profileImage: string
    role: RoleType
}


export interface UsersGetAPIType {
    data: UserType[]
}


export interface UserGetByIdAPIType {
    data: UserType | null
}


export type UserFormPropsType = {
    name: string
    lastName: string
    username: string
    email: string
    password: string
    position: string
    role: string | RoleType
    profileImage: string
}


export type UpdateUserPropsType = {
    idUser: string
    name: string
    lastName: string
    position: string
    profileImage: string
}


export type UserFormComponentPropsType = {
    formType: 'NEW' | 'EDIT'
    initialState: UserFormPropsType
    handleOnSubmit: ( e: FormEvent<HTMLFormElement>, state: UserFormPropsType | UpdateUserPropsType ) => unknown
}


export type UserListComponentPropsType = {
    users: UserType[]
    handleShowUser: ( id: string ) => unknown
    handleEditUser: ( id: string ) => unknown
    handleDisabledUser: ( id: string ) => unknown
    handleRestoreUser: ( id: string ) => unknown
    handleDeleteUser: ( id: string ) => unknown
}

export type UserRowComponentPropsType = {
    user: UserType
    handleShowUser: ( id: string ) => unknown
    handleEditUser: ( id: string ) => unknown
    handleDisabledUser: ( id: string ) => unknown
    handleRestoreUser: ( id: string ) => unknown
    handleDeleteUser: ( id: string ) => unknown
}