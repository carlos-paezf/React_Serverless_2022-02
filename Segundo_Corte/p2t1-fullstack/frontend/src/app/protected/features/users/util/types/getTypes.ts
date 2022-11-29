import { UserType } from './userType'


export type GetUsersParamsPropsType = {
    from?: number
    limit?: number
    all?: boolean
    order?: string
}


export type GetUserByIdParamsPropsType = {
    idUser: string
    includeDeleted?: boolean
}


export type UsersStateType = {
    value: UserType[] | []
    selectedUser: UserType
    status: 'idle' | 'loading' | 'failed'
}