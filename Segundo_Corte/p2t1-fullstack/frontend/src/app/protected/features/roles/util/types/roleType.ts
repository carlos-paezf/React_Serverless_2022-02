import type { BaseModelType } from "../../../../../util/types"


export type RoleFormPropsType = {
    idRole?: string
    roleName: string
    roleDescription: string
}


export interface RoleType extends BaseModelType {
    roleName: string
    roleDescription: string
}

export type RoleRowComponentPropsType = {
    role: RoleType
    handleShowRole: ( id: string ) => unknown
    handleEditRole: ( id: string ) => unknown
    handleDisabledRole: ( id: string ) => unknown
    handleRestoreRole: ( id: string ) => unknown
    handleDeleteRole: ( id: string ) => unknown
}